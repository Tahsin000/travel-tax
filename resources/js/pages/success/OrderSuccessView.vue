<template>
    <div
        class="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4"
    >
        <div
            class="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center"
        >
            <!-- Success Icon -->
            <div class="mb-6">
                <div
                    class="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4"
                >
                    <CheckCircle class="h-12 w-12 text-green-600" />
                </div>
                <h1 class="text-3xl font-bold text-gray-900 mb-2">
                    Order Confirmed!
                </h1>
                <p class="text-gray-600">Thank you for your purchase</p>
            </div>

            <!-- Order Details -->
            <div class="bg-gray-50 rounded-lg p-6 mb-6 text-left">
                <div
                    class="flex justify-between items-center mb-4 pb-4 border-b border-gray-200"
                >
                    <div>
                        <p class="text-sm text-gray-500">Order Number</p>
                        <p class="text-lg font-bold text-gray-900">
                            {{ orderId }}
                        </p>
                    </div>
                    <div class="text-right">
                        <p class="text-sm text-gray-500">Order Date</p>
                        <p class="text-lg font-medium text-gray-900">
                            {{ currentDate }}
                        </p>
                    </div>
                </div>

                <div class="space-y-2 mb-4">
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Sample Product x 2</span>
                        <span class="font-medium">৳7,000</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Shipping</span>
                        <span class="font-medium">Free</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Tax</span>
                        <span class="font-medium">৳700</span>
                    </div>
                </div>

                <div class="pt-4 border-t border-gray-200 flex justify-between">
                    <span class="font-bold text-lg">Total</span>
                    <span class="font-bold text-lg text-primary-600"
                        >৳7,700</span
                    >
                </div>
            </div>

            <!-- Next Steps -->
            <div class="bg-blue-50 rounded-lg p-4 mb-6 text-left">
                <h3 class="font-semibold text-gray-900 mb-2">What's Next?</h3>
                <ul class="text-sm text-gray-700 space-y-1">
                    <li>• You'll receive a confirmation email shortly</li>
                    <li>• Track your order in the "My Orders" section</li>
                    <li>• Estimated delivery: 3-5 business days</li>
                </ul>
            </div>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row gap-4">
                <router-link
                    to="/profile/orders"
                    class="flex-1 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-center"
                >
                    View My Orders
                </router-link>
                <router-link
                    to="/"
                    class="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-center"
                >
                    Back to Home
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CheckCircle } from "lucide-vue-next";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const orderId = computed(() => route.params.orderId || "ORD123456");

const currentDate = computed(() => {
    return new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
});
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

.hover\:bg-primary-700:hover {
    background-color: #1d4ed8;
}
</style>
