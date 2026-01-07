<template>
    <div class="min-h-screen flex flex-col bg-neutral-50">
        <!-- Navbar -->
        <nav class="bg-white shadow-md sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo -->
                    <router-link to="/" class="flex items-center space-x-2">
                        <Mountain class="h-8 w-8 text-primary-600" />
                        <span class="text-xl font-bold text-primary-900"
                            >TravelTax</span
                        >
                    </router-link>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center space-x-8">
                        <router-link
                            to="/"
                            class="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                            active-class="text-primary-600"
                        >
                            Home
                        </router-link>
                        <router-link
                            to="/events"
                            class="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                            active-class="text-primary-600"
                        >
                            Events
                        </router-link>
                        <router-link
                            to="/shop"
                            class="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                            active-class="text-primary-600"
                        >
                            Shop
                        </router-link>
                        <router-link
                            to="/about"
                            class="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                            active-class="text-primary-600"
                        >
                            About
                        </router-link>
                        <a
                            href="#contact"
                            class="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                        >
                            Contact
                        </a>
                    </div>

                    <!-- Search & Actions -->
                    <div class="hidden md:flex items-center space-x-4">
                        <!-- Search Bar -->
                        <div class="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
                            />
                            <Search
                                class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                            />
                        </div>

                        <!-- Cart Icon -->
                        <router-link
                            to="/cart"
                            class="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
                        >
                            <ShoppingCart class="h-6 w-6" />
                            <span
                                class="absolute -top-1 -right-1 bg-secondary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                            >
                                3
                            </span>
                        </router-link>

                        <!-- User Menu -->
                        <router-link
                            to="/profile/dashboard"
                            class="p-2 text-gray-700 hover:text-primary-600 transition-colors"
                        >
                            <User class="h-6 w-6" />
                        </router-link>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button
                        @click="mobileMenuOpen = !mobileMenuOpen"
                        class="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                        <Menu v-if="!mobileMenuOpen" class="h-6 w-6" />
                        <X v-else class="h-6 w-6" />
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div
                v-if="mobileMenuOpen"
                class="md:hidden border-t border-gray-200 bg-white"
            >
                <div class="px-4 py-4 space-y-3">
                    <router-link
                        to="/"
                        class="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                        @click="mobileMenuOpen = false"
                    >
                        Home
                    </router-link>
                    <router-link
                        to="/events"
                        class="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                        @click="mobileMenuOpen = false"
                    >
                        Events
                    </router-link>
                    <router-link
                        to="/shop"
                        class="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                        @click="mobileMenuOpen = false"
                    >
                        Shop
                    </router-link>
                    <router-link
                        to="/about"
                        class="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                        @click="mobileMenuOpen = false"
                    >
                        About
                    </router-link>
                    <a
                        href="#contact"
                        class="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                        @click="mobileMenuOpen = false"
                    >
                        Contact
                    </a>
                    <div class="pt-3 border-t border-gray-200 space-y-3">
                        <router-link
                            to="/cart"
                            class="flex items-center text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                            @click="mobileMenuOpen = false"
                        >
                            <ShoppingCart class="h-5 w-5 mr-2" />
                            Cart (3)
                        </router-link>
                        <router-link
                            to="/profile/dashboard"
                            class="flex items-center text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                            @click="mobileMenuOpen = false"
                        >
                            <User class="h-5 w-5 mr-2" />
                            Profile
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="flex-grow">
            <router-view />
        </main>

        <!-- Footer -->
        <footer class="bg-primary-900 text-white mt-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <!-- Brand -->
                    <div class="col-span-1">
                        <div class="flex items-center space-x-2 mb-4">
                            <Mountain class="h-8 w-8 text-secondary-400" />
                            <span class="text-xl font-bold">TravelTax</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                            Discover Bangladesh's hidden gems with expertly
                            curated tours and premium travel gear.
                        </p>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h3 class="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul class="space-y-2">
                            <li>
                                <router-link
                                    to="/events"
                                    class="text-gray-300 hover:text-secondary-400 transition-colors text-sm"
                                >
                                    Browse Events
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    to="/shop"
                                    class="text-gray-300 hover:text-secondary-400 transition-colors text-sm"
                                >
                                    Shop Gear
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    to="/about"
                                    class="text-gray-300 hover:text-secondary-400 transition-colors text-sm"
                                >
                                    About Us
                                </router-link>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    class="text-gray-300 hover:text-secondary-400 transition-colors text-sm"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Support -->
                    <div>
                        <h3 class="font-semibold text-lg mb-4">Support</h3>
                        <ul class="space-y-2">
                            <li>
                                <router-link
                                    to="/profile/bookings"
                                    class="text-gray-300 hover:text-secondary-400 transition-colors text-sm"
                                >
                                    My Bookings
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    to="/profile/orders"
                                    class="text-gray-300 hover:text-secondary-400 transition-colors text-sm"
                                >
                                    My Orders
                                </router-link>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    class="text-gray-300 hover:text-secondary-400 transition-colors text-sm"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#help"
                                    class="text-gray-300 hover:text-secondary-400 transition-colors text-sm"
                                >
                                    Help Center
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Legal & Social -->
                    <div>
                        <h3 class="font-semibold text-lg mb-4">Legal</h3>
                        <ul class="space-y-2 mb-6">
                            <li>
                                <a
                                    href="#privacy"
                                    class="text-gray-300 hover:text-secondary-400 transition-colors text-sm"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#terms"
                                    class="text-gray-300 hover:text-secondary-400 transition-colors text-sm"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#refund"
                                    class="text-gray-300 hover:text-secondary-400 transition-colors text-sm"
                                >
                                    Refund Policy
                                </a>
                            </li>
                        </ul>

                        <!-- Social Media -->
                        <div class="flex space-x-4">
                            <a
                                href="#facebook"
                                class="text-gray-300 hover:text-secondary-400 transition-colors"
                            >
                                <Facebook class="h-5 w-5" />
                            </a>
                            <a
                                href="#instagram"
                                class="text-gray-300 hover:text-secondary-400 transition-colors"
                            >
                                <Instagram class="h-5 w-5" />
                            </a>
                            <a
                                href="#twitter"
                                class="text-gray-300 hover:text-secondary-400 transition-colors"
                            >
                                <Twitter class="h-5 w-5" />
                            </a>
                            <a
                                href="#youtube"
                                class="text-gray-300 hover:text-secondary-400 transition-colors"
                            >
                                <Youtube class="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Copyright -->
                <div class="border-t border-primary-800 mt-8 pt-8 text-center">
                    <p class="text-gray-400 text-sm">
                        © 2026 TravelTax. All rights reserved. Made with ❤️ in
                        Bangladesh
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import {
    Facebook,
    Instagram,
    Menu,
    Mountain,
    Search,
    ShoppingCart,
    Twitter,
    User,
    X,
    Youtube,
} from "lucide-vue-next";
import { ref } from "vue";

const mobileMenuOpen = ref(false);
</script>

<style scoped>
/* Custom color classes using the specified palette */
.text-primary-600 {
    color: #1e40af;
}

.text-primary-900 {
    color: #1e3a8a;
}

.bg-primary-900 {
    background-color: #1e3a8a;
}

.bg-primary-800 {
    background-color: #1e40af;
}

.text-secondary-400 {
    color: #f59e0b;
}

.text-secondary-500 {
    color: #f59e0b;
}

.bg-secondary-500 {
    background-color: #f59e0b;
}

.hover\:text-primary-600:hover {
    color: #1e40af;
}

.hover\:text-secondary-400:hover {
    color: #f59e0b;
}

.focus\:ring-primary-500:focus {
    --tw-ring-color: #1e40af;
}

.bg-neutral-50 {
    background-color: #f3f4f6;
}
</style>
