<template>
    <div>
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

        <!-- Welcome Section -->
        <div
            class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white mb-8"
        >
            <h2 class="text-2xl font-bold mb-2">Welcome back, John!</h2>
            <p class="text-primary-100">
                Here's what's happening with your account
            </p>
        </div>

        <!-- Quick Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex items-center justify-between mb-4">
                    <div
                        class="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center"
                    >
                        <Calendar class="h-6 w-6 text-blue-600" />
                    </div>
                    <span class="text-3xl font-bold text-gray-900">3</span>
                </div>
                <h3 class="text-gray-600 text-sm">Total Bookings</h3>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex items-center justify-between mb-4">
                    <div
                        class="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center"
                    >
                        <Package class="h-6 w-6 text-green-600" />
                    </div>
                    <span class="text-3xl font-bold text-gray-900">5</span>
                </div>
                <h3 class="text-gray-600 text-sm">Total Orders</h3>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex items-center justify-between mb-4">
                    <div
                        class="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center"
                    >
                        <TrendingUp class="h-6 w-6 text-amber-600" />
                    </div>
                    <span class="text-3xl font-bold text-gray-900">৳45K</span>
                </div>
                <h3 class="text-gray-600 text-sm">Total Spent</h3>
            </div>
        </div>

        <!-- Upcoming Bookings -->
        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">
                Upcoming Bookings
            </h2>
            <div class="space-y-4">
                <div
                    class="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                    <div class="flex items-center space-x-4">
                        <div
                            class="h-16 w-16 bg-primary-100 rounded-lg flex items-center justify-center"
                        >
                            <MapPin class="h-8 w-8 text-primary-600" />
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-900">
                                Cox's Bazar Beach Adventure
                            </h3>
                            <p class="text-sm text-gray-500">
                                Feb 15, 2026 • 2 Guests
                            </p>
                        </div>
                    </div>
                    <span
                        class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                        >Confirmed</span
                    >
                </div>
            </div>
        </div>

        <!-- Quick Actions -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <router-link
                to="/events"
                class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
                <div class="flex items-center space-x-4">
                    <div
                        class="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center"
                    >
                        <Compass class="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-900">
                            Browse Tours
                        </h3>
                        <p class="text-sm text-gray-500">
                            Discover new adventures
                        </p>
                    </div>
                </div>
            </router-link>

            <router-link
                to="/shop"
                class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
                <div class="flex items-center space-x-4">
                    <div
                        class="h-12 w-12 rounded-lg bg-secondary-100 flex items-center justify-center"
                    >
                        <ShoppingBag class="h-6 w-6 text-secondary-600" />
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-900">Shop Gear</h3>
                        <p class="text-sm text-gray-500">
                            Get ready for your trip
                        </p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import {
    Calendar,
    Compass,
    MapPin,
    Package,
    ShoppingBag,
    TrendingUp,
} from "lucide-vue-next";
</script>

<style scoped>
.from-primary-600 {
    --tw-gradient-from: #1e40af;
}

.to-primary-700 {
    --tw-gradient-to: #1d4ed8;
}

.text-primary-100 {
    color: #dbeafe;
}

.bg-primary-100 {
    background-color: #dbeafe;
}

.text-primary-600 {
    color: #1e40af;
}

.bg-secondary-100 {
    background-color: #fef3c7;
}

.text-secondary-600 {
    color: #d97706;
}
</style>
