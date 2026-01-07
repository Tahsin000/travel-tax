<template>
    <div class="min-h-screen bg-neutral-50">
        <div class="flex">
            <!-- Sidebar -->
            <aside class="w-64 bg-white shadow-lg min-h-screen sticky top-0">
                <div class="p-6">
                    <!-- User Info -->
                    <div class="mb-8">
                        <div class="flex items-center space-x-3 mb-2">
                            <div
                                class="h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-semibold"
                            >
                                JD
                            </div>
                            <div>
                                <p class="font-semibold text-gray-900">
                                    John Doe
                                </p>
                                <p class="text-sm text-gray-500">
                                    john@example.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Navigation -->
                    <nav class="space-y-2">
                        <router-link
                            to="/profile/dashboard"
                            class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors"
                            active-class="bg-primary-50 text-primary-600"
                            :class="
                                !isActive('/profile/dashboard')
                                    ? 'text-gray-700 hover:bg-gray-50'
                                    : ''
                            "
                        >
                            <LayoutDashboard class="h-5 w-5" />
                            <span class="font-medium">Dashboard</span>
                        </router-link>

                        <router-link
                            to="/profile/bookings"
                            class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors"
                            active-class="bg-primary-50 text-primary-600"
                            :class="
                                !isActive('/profile/bookings')
                                    ? 'text-gray-700 hover:bg-gray-50'
                                    : ''
                            "
                        >
                            <Calendar class="h-5 w-5" />
                            <span class="font-medium">My Bookings</span>
                        </router-link>

                        <router-link
                            to="/profile/orders"
                            class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors"
                            active-class="bg-primary-50 text-primary-600"
                            :class="
                                !isActive('/profile/orders')
                                    ? 'text-gray-700 hover:bg-gray-50'
                                    : ''
                            "
                        >
                            <Package class="h-5 w-5" />
                            <span class="font-medium">My Orders</span>
                        </router-link>

                        <router-link
                            to="/profile/settings"
                            class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors"
                            active-class="bg-primary-50 text-primary-600"
                            :class="
                                !isActive('/profile/settings')
                                    ? 'text-gray-700 hover:bg-gray-50'
                                    : ''
                            "
                        >
                            <Settings class="h-5 w-5" />
                            <span class="font-medium">Settings</span>
                        </router-link>
                    </nav>

                    <!-- Logout -->
                    <div class="mt-8 pt-8 border-t border-gray-200">
                        <button
                            class="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full"
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
    LayoutDashboard,
    LogOut,
    Package,
    Settings,
} from "lucide-vue-next";
import { useRoute } from "vue-router";

const route = useRoute();

const isActive = (path) => {
    return route.path === path;
};
</script>

<style scoped>
.bg-neutral-50 {
    background-color: #f3f4f6;
}

.bg-primary-50 {
    background-color: #eff6ff;
}

.text-primary-600 {
    color: #1e40af;
}

.bg-primary-600 {
    background-color: #1e40af;
}
</style>
