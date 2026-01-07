<template>
    <div
        class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4"
    >
        <div
            class="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center"
        >
            <!-- 404 Illustration -->
            <div class="mb-8">
                <div class="relative">
                    <div class="text-9xl font-bold text-gray-200">404</div>
                    <div
                        class="absolute inset-0 flex items-center justify-center"
                    >
                        <Compass
                            class="h-24 w-24 text-primary-600 animate-spin-slow"
                        />
                    </div>
                </div>
            </div>

            <!-- Message -->
            <h1 class="text-4xl font-bold text-gray-900 mb-4">
                Lost in the Journey?
            </h1>
            <p class="text-lg text-gray-600 mb-8">
                Looks like you've wandered off the beaten path. The page you're
                looking for doesn't exist.
            </p>

            <!-- Travel-themed message -->
            <div class="bg-primary-50 rounded-lg p-6 mb-8">
                <p class="text-gray-700 italic">
                    "Not all those who wander are lost... but this page
                    definitely is!"
                </p>
            </div>

            <!-- Suggestions -->
            <div class="mb-8">
                <h3 class="font-semibold text-gray-900 mb-4">
                    Where would you like to go?
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <router-link
                        to="/events"
                        class="flex items-center justify-center space-x-2 p-4 border-2 border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition-all"
                    >
                        <MapPin class="h-5 w-5 text-primary-600" />
                        <span class="font-medium">Explore Events</span>
                    </router-link>
                    <router-link
                        to="/shop"
                        class="flex items-center justify-center space-x-2 p-4 border-2 border-gray-200 rounded-lg hover:border-secondary-600 hover:bg-secondary-50 transition-all"
                    >
                        <ShoppingBag class="h-5 w-5 text-secondary-600" />
                        <span class="font-medium">Shop Gear</span>
                    </router-link>
                </div>
            </div>

            <!-- Back to Home -->
            <router-link
                to="/"
                class="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
                <Home class="h-5 w-5" />
                <span>Back to Home</span>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { Compass, Home, MapPin, ShoppingBag } from "lucide-vue-next";
</script>

<style scoped>
.bg-primary-50 {
    background-color: #eff6ff;
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

.bg-secondary-50 {
    background-color: #fffbeb;
}

.text-secondary-600 {
    color: #d97706;
}

.border-secondary-600 {
    border-color: #d97706;
}

.hover\:bg-primary-50:hover {
    background-color: #eff6ff;
}

.hover\:bg-primary-700:hover {
    background-color: #1d4ed8;
}

.hover\:bg-secondary-50:hover {
    background-color: #fffbeb;
}

.hover\:border-primary-600:hover {
    border-color: #1e40af;
}

.hover\:border-secondary-600:hover {
    border-color: #d97706;
}

.animate-spin-slow {
    animation: spin 3s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
