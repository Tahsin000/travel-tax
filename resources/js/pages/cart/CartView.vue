<template>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div
            v-if="cartItems.length > 0"
            class="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
            <!-- Cart Items -->
            <div class="lg:col-span-2 space-y-4">
                <div
                    v-for="item in cartItems"
                    :key="item.id"
                    class="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4"
                >
                    <img
                        :src="item.image"
                        :alt="item.name"
                        class="h-24 w-24 object-cover rounded-lg"
                    />
                    <div class="flex-1">
                        <h3 class="font-semibold text-gray-900 mb-1">
                            {{ item.name }}
                        </h3>
                        <p class="text-sm text-gray-500 mb-2">
                            {{ item.category }}
                        </p>
                        <div class="text-lg font-bold text-primary-600">
                            ৳{{ item.price.toLocaleString() }}
                        </div>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button
                            @click="item.quantity > 1 && item.quantity--"
                            class="h-8 w-8 rounded border border-gray-300 hover:bg-gray-50"
                        >
                            <Minus class="h-4 w-4 mx-auto" />
                        </button>
                        <span class="w-8 text-center font-medium">{{
                            item.quantity
                        }}</span>
                        <button
                            @click="item.quantity++"
                            class="h-8 w-8 rounded border border-gray-300 hover:bg-gray-50"
                        >
                            <Plus class="h-4 w-4 mx-auto" />
                        </button>
                    </div>
                    <button
                        @click="removeItem(item.id)"
                        class="text-red-500 hover:text-red-700 p-2"
                    >
                        <Trash2 class="h-5 w-5" />
                    </button>
                </div>
            </div>

            <!-- Order Summary -->
            <div class="lg:col-span-1">
                <div class="bg-white rounded-lg shadow-md p-6 sticky top-24">
                    <h2 class="text-xl font-bold text-gray-900 mb-4">
                        Order Summary
                    </h2>

                    <div class="space-y-3 mb-6">
                        <div class="flex justify-between text-gray-600">
                            <span>Subtotal ({{ totalItems }} items)</span>
                            <span>৳{{ subtotal.toLocaleString() }}</span>
                        </div>
                        <div class="flex justify-between text-gray-600">
                            <span>Shipping</span>
                            <span>{{
                                shipping === 0 ? "Free" : `৳${shipping}`
                            }}</span>
                        </div>
                        <div class="flex justify-between text-gray-600">
                            <span>Tax (10%)</span>
                            <span>৳{{ tax.toLocaleString() }}</span>
                        </div>
                        <div
                            class="border-t border-gray-200 pt-3 flex justify-between text-lg font-bold text-gray-900"
                        >
                            <span>Total</span>
                            <span>৳{{ total.toLocaleString() }}</span>
                        </div>
                    </div>

                    <button
                        @click="proceedToCheckout"
                        class="w-full bg-secondary-500 text-white py-3 rounded-lg hover:bg-secondary-600 transition-colors font-semibold mb-3"
                    >
                        Proceed to Checkout
                    </button>

                    <router-link
                        to="/shop"
                        class="block text-center text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                        Continue Shopping
                    </router-link>
                </div>
            </div>
        </div>

        <!-- Empty Cart -->
        <div v-else class="text-center py-16">
            <ShoppingCart class="h-24 w-24 text-gray-400 mx-auto mb-4" />
            <h2 class="text-2xl font-bold text-gray-900 mb-2">
                Your cart is empty
            </h2>
            <p class="text-gray-600 mb-6">Add some products to get started!</p>
            <router-link
                to="/shop"
                class="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
                Browse Products
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-vue-next";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { products } from "../../data/mockData";

const router = useRouter();

// Mock cart items (would come from Pinia store in real app)
const cartItems = ref([
    { ...products[0], quantity: 1 },
    { ...products[5], quantity: 2 },
    { ...products[2], quantity: 1 },
]);

const subtotal = computed(() => {
    return cartItems.value.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
});

const totalItems = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.quantity, 0);
});

const shipping = computed(() => {
    return subtotal.value >= 5000 ? 0 : 150;
});

const tax = computed(() => {
    return Math.round(subtotal.value * 0.1);
});

const total = computed(() => {
    return subtotal.value + shipping.value + tax.value;
});

const removeItem = (id) => {
    const index = cartItems.value.findIndex((item) => item.id === id);
    if (index > -1) {
        cartItems.value.splice(index, 1);
    }
};

const proceedToCheckout = () => {
    router.push("/checkout");
};
</script>

<style scoped>
.bg-primary-600 {
    background-color: #1e40af;
}

.bg-primary-700 {
    background-color: #1d4ed8;
}

.text-primary-600 {
    color: #1e40af;
}

.text-primary-700 {
    color: #1d4ed8;
}

.bg-secondary-500 {
    background-color: #f59e0b;
}

.bg-secondary-600 {
    background-color: #d97706;
}

.hover\:bg-primary-700:hover {
    background-color: #1d4ed8;
}

.hover\:bg-secondary-600:hover {
    background-color: #d97706;
}

.hover\:text-primary-700:hover {
    color: #1d4ed8;
}
</style>
