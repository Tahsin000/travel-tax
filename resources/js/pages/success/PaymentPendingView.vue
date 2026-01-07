<template>
    <div
        class="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-4"
    >
        <div
            class="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center"
        >
            <!-- Pending Icon -->
            <div class="mb-6">
                <div
                    class="h-20 w-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4"
                >
                    <Clock class="h-12 w-12 text-amber-600" />
                </div>
                <h1 class="text-3xl font-bold text-gray-900 mb-2">
                    Payment Pending
                </h1>
                <p class="text-gray-600">
                    Your order is awaiting payment verification
                </p>
            </div>

            <!-- Instructions -->
            <div
                class="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 mb-6 text-left"
            >
                <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
                    <AlertCircle class="h-5 w-5 mr-2 text-amber-600" />
                    bKash Payment Instructions
                </h3>
                <ol class="text-sm text-gray-700 space-y-2 ml-7">
                    <li>
                        1. Send payment to bKash number:
                        <strong>01712-345678</strong>
                    </li>
                    <li>2. Keep your transaction ID safe</li>
                    <li>
                        3. Our team will verify your payment within 24 hours
                    </li>
                    <li>
                        4. You'll receive a confirmation email once verified
                    </li>
                </ol>
            </div>

            <!-- Timeline -->
            <div class="bg-gray-50 rounded-lg p-6 mb-6 text-left">
                <h3 class="font-semibold text-gray-900 mb-4">
                    Expected Timeline
                </h3>
                <div class="space-y-3">
                    <div class="flex items-start">
                        <div
                            class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold mr-3"
                        >
                            ✓
                        </div>
                        <div>
                            <p class="font-medium text-gray-900">
                                Order Placed
                            </p>
                            <p class="text-xs text-gray-500">Just now</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div
                            class="h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-sm font-bold mr-3"
                        >
                            2
                        </div>
                        <div>
                            <p class="font-medium text-gray-900">
                                Payment Verification
                            </p>
                            <p class="text-xs text-gray-500">Within 24 hours</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div
                            class="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-white text-sm font-bold mr-3"
                        >
                            3
                        </div>
                        <div>
                            <p class="font-medium text-gray-500">
                                Order Processing
                            </p>
                            <p class="text-xs text-gray-400">
                                After verification
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Contact Info -->
            <div class="bg-blue-50 rounded-lg p-4 mb-6">
                <p class="text-sm text-gray-700">
                    <strong>Need help?</strong> Contact us at
                    support@traveltax.com or call 01712-345678
                </p>
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
import { AlertCircle, Clock } from "lucide-vue-next";
</script>

<style scoped>
.bg-primary-600 {
    background-color: #1e40af;
}

.bg-primary-700 {
    background-color: #1d4ed8;
}

.hover\:bg-primary-700:hover {
    background-color: #1d4ed8;
}
</style>
