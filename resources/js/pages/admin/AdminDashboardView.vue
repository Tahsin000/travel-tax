<template>
    <div>
        <h1 class="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-gray-600 mb-1">Total Events</p>
                        <p class="text-3xl font-bold text-gray-900">6</p>
                    </div>
                    <Calendar class="h-12 w-12 text-blue-500" />
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-gray-600 mb-1">Total Products</p>
                        <p class="text-3xl font-bold text-gray-900">10</p>
                    </div>
                    <Package class="h-12 w-12 text-green-500" />
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-gray-600 mb-1">Total Orders</p>
                        <p class="text-3xl font-bold text-gray-900">24</p>
                    </div>
                    <ShoppingBag class="h-12 w-12 text-purple-500" />
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-gray-600 mb-1">Revenue</p>
                        <p class="text-3xl font-bold text-gray-900">৳2.4M</p>
                    </div>
                    <TrendingUp class="h-12 w-12 text-amber-500" />
                </div>
            </div>
        </div>

        <!-- Recent Activity -->
        <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-bold text-gray-900 mb-4">
                Recent Activity
            </h2>
            <div class="space-y-4">
                <div
                    class="flex items-center space-x-4 pb-4 border-b border-gray-200"
                >
                    <div
                        class="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center"
                    >
                        <CheckCircle class="h-5 w-5 text-green-600" />
                    </div>
                    <div class="flex-1">
                        <p class="text-sm font-medium text-gray-900">
                            New booking for Cox's Bazar Beach Adventure
                        </p>
                        <p class="text-xs text-gray-500">2 hours ago</p>
                    </div>
                </div>
                <div
                    class="flex items-center space-x-4 pb-4 border-b border-gray-200"
                >
                    <div
                        class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center"
                    >
                        <ShoppingCart class="h-5 w-5 text-blue-600" />
                    </div>
                    <div class="flex-1">
                        <p class="text-sm font-medium text-gray-900">
                            New product order #ORD004
                        </p>
                        <p class="text-xs text-gray-500">5 hours ago</p>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <div
                        class="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center"
                    >
                        <AlertCircle class="h-5 w-5 text-amber-600" />
                    </div>
                    <div class="flex-1">
                        <p class="text-sm font-medium text-gray-900">
                            bKash payment pending verification
                        </p>
                        <p class="text-xs text-gray-500">1 day ago</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    AlertCircle,
    Calendar,
    CheckCircle,
    Package,
    ShoppingBag,
    ShoppingCart,
    TrendingUp,
} from "lucide-vue-next";
</script>
