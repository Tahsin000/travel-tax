<template>
    <div
        class="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-4"
    >
        <div class="w-full max-w-md">
            <!-- Logo -->
            <div class="text-center mb-8">
                <router-link to="/" class="inline-flex items-center space-x-2">
                    <Mountain class="h-10 w-10 text-primary-600" />
                    <span class="text-2xl font-bold text-primary-900"
                        >TravelTax</span
                    >
                </router-link>
            </div>

            <!-- Content Card -->
            <div class="bg-white rounded-2xl shadow-xl p-8">
                <router-view />
            </div>

            <!-- Back to Home -->
            <div class="text-center mt-6">
                <router-link
                    to="/"
                    class="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                    ← Back to Home
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Mountain } from "lucide-vue-next";
</script>

<style scoped>
.from-primary-50 {
    --tw-gradient-from: #eff6ff;
}

.to-secondary-50 {
    --tw-gradient-to: #fffbeb;
}

.text-primary-600 {
    color: #1e40af;
}

.text-primary-900 {
    color: #1e3a8a;
}

.hover\:text-primary-600:hover {
    color: #1e40af;
}
</style>
