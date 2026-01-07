<template>
    <div class="min-h-screen bg-gray-100">
        <div class="flex">
            <!-- Admin Sidebar -->
            <aside
                class="w-64 bg-primary-900 text-white min-h-screen sticky top-0"
            >
                <div class="p-6">
                    <!-- Admin Branding -->
                    <div class="mb-8">
                        <div class="flex items-center space-x-2 mb-2">
                            <Shield class="h-8 w-8 text-secondary-400" />
                            <span class="text-xl font-bold">Admin Panel</span>
                        </div>
                        <p class="text-sm text-gray-300">
                            TravelTax Management
                        </p>
                    </div>

                    <!-- Navigation -->
                    <nav class="space-y-2">
                        <router-link
                            to="/admin/dashboard"
                            class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors"
                            active-class="bg-primary-800 text-white"
                            :class="
                                !isActive('/admin/dashboard')
                                    ? 'text-gray-300 hover:bg-primary-800'
                                    : ''
                            "
                        >
                            <LayoutDashboard class="h-5 w-5" />
                            <span class="font-medium">Dashboard</span>
                        </router-link>

                        <router-link
                            to="/admin/events"
                            class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors"
                            active-class="bg-primary-800 text-white"
                            :class="
                                !isActive('/admin/events')
                                    ? 'text-gray-300 hover:bg-primary-800'
                                    : ''
                            "
                        >
                            <Calendar class="h-5 w-5" />
                            <span class="font-medium">Events</span>
                        </router-link>

                        <router-link
                            to="/admin/products"
                            class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors"
                            active-class="bg-primary-800 text-white"
                            :class="
                                !isActive('/admin/products')
                                    ? 'text-gray-300 hover:bg-primary-800'
                                    : ''
                            "
                        >
                            <Package class="h-5 w-5" />
                            <span class="font-medium">Products</span>
                        </router-link>

                        <router-link
                            to="/admin/orders"
                            class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors"
                            active-class="bg-primary-800 text-white"
                            :class="
                                !isActive('/admin/orders')
                                    ? 'text-gray-300 hover:bg-primary-800'
                                    : ''
                            "
                        >
                            <ShoppingBag class="h-5 w-5" />
                            <span class="font-medium">Orders</span>
                        </router-link>
                    </nav>

                    <!-- Back to Site & Logout -->
                    <div
                        class="mt-8 pt-8 border-t border-primary-800 space-y-2"
                    >
                        <router-link
                            to="/"
                            class="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-primary-800 transition-colors"
                        >
                            <Home class="h-5 w-5" />
                            <span class="font-medium">Back to Site</span>
                        </router-link>
                        <button
                            class="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-300 hover:bg-red-900 transition-colors w-full"
                        >
                            <LogOut class="h-5 w-5" />
                            <span class="font-medium">Logout</span>
                        </button>
                    </div>
                </div>
            </aside>

            <!-- Main Content -->
            <main class="flex-1 p-8">
                <router-view />
            </main>
        </div>
    </div>
</template>

<script setup>
import {
    Calendar,
    Home,
    LayoutDashboard,
    LogOut,
    Package,
    Shield,
    ShoppingBag,
} from "lucide-vue-next";
import { useRoute } from "vue-router";

const route = useRoute();

const isActive = (path) => {
    return route.path === path;
};
</script>

<style scoped>
.bg-primary-900 {
    background-color: #1e3a8a;
}

.bg-primary-800 {
    background-color: #1e40af;
}

.text-secondary-400 {
    color: #f59e0b;
}
</style>
