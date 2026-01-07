<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Header -->
        <div class="mb-12">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">
                Travel Gear Shop
            </h1>
            <p class="text-lg text-gray-600">
                Premium equipment for your next adventure
            </p>
        </div>

        <!-- Filters (Functional) -->
        <div class="mb-8 flex flex-wrap gap-4">
            <div class="flex-1 min-w-[200px]">
                <input
                    v-model="searchQuery"
                    type="text"
                    placeholder="Search products..."
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500"
                />
            </div>
            <select
                v-model="selectedCategory"
                class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500"
            >
                <option value="">All Categories</option>
                <option value="Backpacks">Backpacks</option>
                <option value="Camping">Camping</option>
                <option value="Trekking Gear">Trekking Gear</option>
                <option value="Hydration">Hydration</option>
                <option value="Lighting">Lighting</option>
            </select>
            <select
                v-model="sortBy"
                class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500"
            >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
            </select>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
                v-for="product in filteredProducts"
                :key="product.id"
                class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                @click="navigateToProduct(product.slug)"
            >
                <!-- Image -->
                <div class="relative h-48 overflow-hidden bg-gray-100">
                    <img
                        :src="product.image"
                        :alt="product.name"
                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div
                        v-if="product.stock < 10"
                        class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold"
                    >
                        Low Stock
                    </div>
                </div>

                <!-- Content -->
                <div class="p-4">
                    <div class="text-xs text-gray-500 mb-1">
                        {{ product.category }}
                    </div>
                    <h3
                        class="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2"
                    >
                        {{ product.name }}
                    </h3>
                    <p class="text-sm text-gray-600 mb-3 line-clamp-2">
                        {{ product.description }}
                    </p>

                    <!-- Rating -->
                    <div class="flex items-center mb-3">
                        <div class="flex items-center space-x-1">
                            <Star
                                v-for="i in 5"
                                :key="i"
                                :class="
                                    i <= product.rating
                                        ? 'text-yellow-400 fill-yellow-400'
                                        : 'text-gray-300'
                                "
                                class="h-4 w-4"
                            />
                        </div>
                        <span class="text-xs text-gray-500 ml-2"
                            >({{ product.reviews }})</span
                        >
                    </div>

                    <!-- Price & CTA -->
                    <div class="flex items-center justify-between">
                        <div class="text-xl font-bold text-primary-600">
                            ৳{{ product.price.toLocaleString() }}
                        </div>
                        <button
                            class="bg-secondary-500 text-white px-4 py-2 rounded-lg hover:bg-secondary-600 transition-colors text-sm font-medium"
                        >
                            View
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredProducts.length === 0" class="text-center py-16">
            <Package class="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 class="text-xl font-semibold text-gray-700 mb-2">
                No products found
            </h3>
            <p class="text-gray-500">Try adjusting your filters</p>
        </div>
    </div>
</template>

<script setup>
import { Package, Star } from "lucide-vue-next";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useSEO } from "../../composables/useSEO";
import { products } from "../../data/mockData";

const router = useRouter();

// SEO Configuration
useSEO({
    title: "Travel Gear Shop - Premium Equipment for Adventures | TravelTax",
    description:
        "Shop premium travel gear, backpacks, camping equipment, and trekking essentials. Quality products for every adventure in Bangladesh.",
    keywords:
        "travel gear, backpacks, camping equipment, trekking gear, outdoor equipment, adventure gear bangladesh",
    image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=1200&h=630&fit=crop",
    type: "website",
    structuredData: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Travel Gear Products",
        description: "Premium travel and outdoor equipment",
        itemListElement: products.slice(0, 10).map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
                "@type": "Product",
                name: product.name,
                description: product.description,
                image: product.image,
                url: `https://traveltax.com/shop/${product.slug}`,
            },
        })),
    },
});

// Search, filter, and sort state
const searchQuery = ref("");
const selectedCategory = ref("");
const sortBy = ref("featured");

// Computed filtered and sorted products
const filteredProducts = computed(() => {
    let result = [...products];

    // Apply search filter
    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        result = result.filter(
            (product) =>
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
        );
    }

    // Apply category filter
    if (selectedCategory.value && selectedCategory.value !== "") {
        result = result.filter(
            (product) =>
                product.category.toLowerCase() ===
                selectedCategory.value.toLowerCase()
        );
    }

    // Apply sorting
    if (sortBy.value === "price-low") {
        result.sort((a, b) => a.price - b.price);
    } else if (sortBy.value === "price-high") {
        result.sort((a, b) => b.price - a.price);
    } else if (sortBy.value === "rating") {
        result.sort((a, b) => b.rating - a.rating);
    }
    // 'featured' keeps original order

    return result;
});

const navigateToProduct = (slug) => {
    router.push(`/shop/${slug}`);
};
</script>

<style scoped>
.bg-primary-600 {
    background-color: #1e40af;
}

.text-primary-600 {
    color: #1e40af;
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

.hover\:bg-secondary-600:hover {
    background-color: #d97706;
}

.hover\:text-primary-600:hover {
    color: #1e40af;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
