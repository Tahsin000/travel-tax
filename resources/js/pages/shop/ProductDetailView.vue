<template>
    <div v-if="product" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Product Images -->
            <div>
                <div class="bg-gray-100 rounded-2xl overflow-hidden mb-4">
                    <img
                        :src="product.image"
                        :alt="product.name"
                        class="w-full h-96 object-cover"
                    />
                </div>
                <!-- Thumbnail Gallery (placeholder) -->
                <div class="grid grid-cols-4 gap-2">
                    <div
                        v-for="i in 4"
                        :key="i"
                        class="bg-gray-200 rounded-lg h-20"
                    ></div>
                </div>
            </div>

            <!-- Product Info -->
            <div>
                <div class="mb-2">
                    <span
                        class="inline-block bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                        {{ product.category }}
                    </span>
                </div>

                <h1 class="text-3xl font-bold text-gray-900 mb-4">
                    {{ product.name }}
                </h1>

                <!-- Rating -->
                <div class="flex items-center mb-6">
                    <div class="flex items-center space-x-1">
                        <Star
                            v-for="i in 5"
                            :key="i"
                            :class="
                                i <= product.rating
                                    ? 'text-yellow-400 fill-yellow-400'
                                    : 'text-gray-300'
                            "
                            class="h-5 w-5"
                        />
                    </div>
                    <span class="text-sm text-gray-600 ml-2"
                        >{{ product.rating }} ({{
                            product.reviews
                        }}
                        reviews)</span
                    >
                </div>

                <!-- Price -->
                <div class="mb-6">
                    <div class="text-4xl font-bold text-primary-600 mb-2">
                        ৳{{ product.price.toLocaleString() }}
                    </div>
                    <div class="flex items-center space-x-2 text-sm">
                        <span
                            :class="
                                product.stock > 10
                                    ? 'text-green-600'
                                    : 'text-red-600'
                            "
                            class="font-medium"
                        >
                            {{
                                product.stock > 0
                                    ? `${product.stock} in stock`
                                    : "Out of stock"
                            }}
                        </span>
                    </div>
                </div>

                <!-- Description -->
                <div class="mb-6">
                    <h2 class="text-lg font-semibold text-gray-900 mb-2">
                        Description
                    </h2>
                    <p class="text-gray-700 leading-relaxed">
                        {{ product.fullDescription }}
                    </p>
                </div>

                <!-- Specifications -->
                <div class="mb-8">
                    <h2 class="text-lg font-semibold text-gray-900 mb-3">
                        Specifications
                    </h2>
                    <div class="bg-gray-50 rounded-lg p-4 space-y-2">
                        <div
                            v-for="(value, key) in product.specifications"
                            :key="key"
                            class="flex justify-between py-2 border-b border-gray-200 last:border-0"
                        >
                            <span class="text-gray-600 capitalize"
                                >{{
                                    key.replace(/([A-Z])/g, " $1").trim()
                                }}:</span
                            >
                            <span class="font-medium text-gray-900">{{
                                value
                            }}</span>
                        </div>
                    </div>
                </div>

                <!-- Quantity & Add to Cart -->
                <div class="space-y-4">
                    <div>
                        <label
                            class="block text-sm font-medium text-gray-700 mb-2"
                            >Quantity</label
                        >
                        <div class="flex items-center space-x-3">
                            <button
                                @click="quantity > 1 && quantity--"
                                class="h-10 w-10 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                            >
                                <Minus class="h-4 w-4 mx-auto" />
                            </button>
                            <input
                                v-model.number="quantity"
                                type="number"
                                min="1"
                                :max="product.stock"
                                class="w-20 text-center border border-gray-300 rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                            <button
                                @click="quantity < product.stock && quantity++"
                                class="h-10 w-10 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                            >
                                <Plus class="h-4 w-4 mx-auto" />
                            </button>
                        </div>
                    </div>

                    <button
                        @click="addToCart"
                        :disabled="product.stock === 0"
                        class="w-full bg-secondary-500 text-white py-3 rounded-lg hover:bg-secondary-600 transition-colors font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                        <ShoppingCart class="h-5 w-5" />
                        <span>{{
                            product.stock > 0 ? "Add to Cart" : "Out of Stock"
                        }}</span>
                    </button>

                    <button
                        @click="buyNow"
                        :disabled="product.stock === 0"
                        class="w-full border-2 border-royal-600 text-royal-600 py-3 rounded-lg hover:bg-royal-50 transition-colors font-semibold disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed"
                    >
                        Buy Now
                    </button>
                </div>

                <!-- Additional Info -->
                <div class="mt-8 pt-8 border-t border-gray-200 space-y-3">
                    <div
                        class="flex items-center space-x-3 text-sm text-gray-600"
                    >
                        <Truck class="h-5 w-5" />
                        <span>Free shipping on orders over ৳5000</span>
                    </div>
                    <div
                        class="flex items-center space-x-3 text-sm text-gray-600"
                    >
                        <Shield class="h-5 w-5" />
                        <span
                            >{{
                                product.specifications.warranty || "1 Year"
                            }}
                            Warranty</span
                        >
                    </div>
                    <div
                        class="flex items-center space-x-3 text-sm text-gray-600"
                    >
                        <RotateCcw class="h-5 w-5" />
                        <span>7-day return policy</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Back Button -->
        <div class="mt-12">
            <button
                @click="$router.push('/shop')"
                class="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
                <ArrowLeft class="h-5 w-5" />
                <span>Back to shop</span>
            </button>
        </div>
    </div>

    <!-- Not Found -->
    <div v-else class="max-w-4xl mx-auto px-4 py-16 text-center">
        <AlertCircle class="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
        <p class="text-gray-600 mb-6">
            The product you're looking for doesn't exist.
        </p>
        <button
            @click="$router.push('/shop')"
            class="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
            Browse All Products
        </button>
    </div>
</template>

<script setup>
import {
    AlertCircle,
    ArrowLeft,
    Minus,
    Plus,
    RotateCcw,
    Shield,
    ShoppingCart,
    Star,
    Truck,
} from "lucide-vue-next";
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
import {
    getBreadcrumbSchema,
    getProductSchema,
    useSEO,
} from "../../composables/useSEO";
import { products } from "../../data/mockData";

const props = defineProps({
    productSlug: {
        type: String,
        required: true,
    },
});

const router = useRouter();
const quantity = ref(1);

const product = computed(() => {
    return products.find((p) => p.slug === props.productSlug);
});

// Dynamic SEO based on product data
watch(
    product,
    (currentProduct) => {
        if (currentProduct) {
            useSEO({
                title: `${
                    currentProduct.name
                } - ৳${currentProduct.price.toLocaleString()} | TravelTax Shop`,
                description: currentProduct.description,
                keywords: `${currentProduct.name}, ${
                    currentProduct.category
                }, travel gear, ${currentProduct.brand || "outdoor equipment"}`,
                image: currentProduct.image,
                type: "product",
                structuredData: {
                    "@context": "https://schema.org",
                    "@graph": [
                        getProductSchema(currentProduct),
                        getBreadcrumbSchema([
                            { name: "Home", url: "https://traveltax.com" },
                            { name: "Shop", url: "https://traveltax.com/shop" },
                            {
                                name: currentProduct.name,
                                url: `https://traveltax.com/shop/${currentProduct.slug}`,
                            },
                        ]),
                    ],
                },
            });
        }
    },
    { immediate: true }
);

const addToCart = () => {
    // TODO: Integrate with cart store
    alert(`Added ${quantity.value} x ${product.value.name} to cart!`);
    // Navigate to cart
    router.push("/cart");
};

const buyNow = () => {
    // Navigate directly to checkout
    router.push("/checkout");
};
</script>

<style scoped>
.bg-primary-50 {
    background-color: #eff6ff;
}

.bg-primary-100 {
    background-color: #dbeafe;
}

.bg-primary-600 {
    background-color: #1e40af;
}

.bg-primary-700 {
    background-color: #1d4ed8;
}

.text-primary-600 {
    color: #1e40af;
}

.border-primary-600 {
    border-color: #1e40af;
}

.bg-secondary-500 {
    background-color: #f59e0b;
}

.bg-secondary-600 {
    background-color: #d97706;
}

.focus\:ring-primary-500:focus {
    --tw-ring-color: #1e40af;
}

.hover\:bg-primary-50:hover {
    background-color: #eff6ff;
}

.hover\:bg-primary-700:hover {
    background-color: #1d4ed8;
}

.hover\:bg-secondary-600:hover {
    background-color: #d97706;
}

.hover\:text-primary-600:hover {
    color: #1e40af;
}
</style>
