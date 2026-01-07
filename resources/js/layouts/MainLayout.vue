<template>
    <div class="min-h-screen flex flex-col bg-neutral-50">
        <!-- Navbar -->
        <nav
            class="bg-white shadow-luxury sticky top-0 z-50 border-b border-royal-100"
        >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo -->
                    <router-link
                        to="/"
                        class="flex items-center space-x-2 group"
                    >
                        <Mountain
                            class="h-8 w-8 text-royal-600 group-hover:text-gold-500 transition-colors"
                        />
                        <span
                            class="text-xl font-display font-bold text-royal-900"
                            >TravelTax</span
                        >
                    </router-link>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center space-x-8">
                        <router-link
                            to="/"
                            exact
                            class="text-gray-700 hover:text-royal-600 transition-colors font-medium"
                            active-class="text-royal-600 font-semibold"
                        >
                            Home
                        </router-link>
                        <router-link
                            to="/events"
                            class="text-gray-700 hover:text-royal-600 transition-colors font-medium"
                            active-class="text-royal-600 font-semibold"
                        >
                            Events
                        </router-link>
                        <router-link
                            to="/shop"
                            class="text-gray-700 hover:text-royal-600 transition-colors font-medium"
                            active-class="text-royal-600 font-semibold"
                        >
                            Shop
                        </router-link>
                        <router-link
                            to="/about"
                            class="text-gray-700 hover:text-royal-600 transition-colors font-medium"
                            active-class="text-royal-600 font-semibold"
                        >
                            About
                        </router-link>
                        <router-link
                            to="/contact"
                            class="text-gray-700 hover:text-royal-600 transition-colors font-medium"
                            active-class="text-royal-600 font-semibold"
                        >
                            Contact
                        </router-link>
                    </div>

                    <!-- Actions (removed search) -->
                    <div class="hidden md:flex items-center space-x-4">
                        <!-- Cart Icon -->
                        <router-link
                            to="/cart"
                            class="relative p-2 text-gray-700 hover:text-royal-600 transition-colors"
                        >
                            <ShoppingCart class="h-6 w-6" />
                            <span
                                class="absolute -top-1 -right-1 bg-gold-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
                            >
                                3
                            </span>
                        </router-link>

                        <!-- User Menu -->
                        <router-link
                            to="/profile/dashboard"
                            class="p-2 text-gray-700 hover:text-royal-600 transition-colors"
                        >
                            <User class="h-6 w-6" />
                        </router-link>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button
                        @click="mobileMenuOpen = !mobileMenuOpen"
                        class="md:hidden p-2 text-gray-700 hover:text-royal-600 transition-colors"
                    >
                        <Menu v-if="!mobileMenuOpen" class="h-6 w-6" />
                        <X v-else class="h-6 w-6" />
                    </button>
                </div>
            </div>

            <!-- Mobile Sidebar -->
            <!-- Overlay -->
            <div
                v-if="mobileMenuOpen"
                @click="mobileMenuOpen = false"
                class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity"
            ></div>
            <!-- Sidebar -->
            <div
                :class="mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
                class="fixed top-0 right-0 h-full w-80 bg-white shadow-luxury-lg z-50 md:hidden transition-transform duration-300 ease-in-out"
            >
                <div class="flex flex-col h-full">
                    <!-- Sidebar Header -->
                    <div
                        class="flex items-center justify-between p-6 border-b border-royal-100 bg-gradient-royal"
                    >
                        <div class="flex items-center space-x-2">
                            <Mountain class="h-8 w-8 text-gold-400" />
                            <span
                                class="text-xl font-display font-bold text-white"
                                >TravelTax</span
                            >
                        </div>
                        <button
                            @click="mobileMenuOpen = false"
                            class="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                        >
                            <X class="h-6 w-6" />
                        </button>
                    </div>

                    <!-- Navigation Links -->
                    <nav class="flex-1 overflow-y-auto p-6 space-y-2">
                        <router-link
                            to="/"
                            exact
                            class="block px-4 py-3 rounded-lg text-gray-700 hover:bg-royal-50 hover:text-royal-600 transition-all font-medium"
                            active-class="bg-gradient-royal text-white font-semibold"
                            @click="mobileMenuOpen = false"
                        >
                            Home
                        </router-link>
                        <router-link
                            to="/events"
                            class="block px-4 py-3 rounded-lg text-gray-700 hover:bg-royal-50 hover:text-royal-600 transition-all font-medium"
                            active-class="bg-gradient-royal text-white font-semibold"
                            @click="mobileMenuOpen = false"
                        >
                            Events
                        </router-link>
                        <router-link
                            to="/shop"
                            class="block px-4 py-3 rounded-lg text-gray-700 hover:bg-royal-50 hover:text-royal-600 transition-all font-medium"
                            active-class="bg-gradient-royal text-white font-semibold"
                            @click="mobileMenuOpen = false"
                        >
                            Shop
                        </router-link>
                        <router-link
                            to="/about"
                            class="block px-4 py-3 rounded-lg text-gray-700 hover:bg-royal-50 hover:text-royal-600 transition-all font-medium"
                            active-class="bg-gradient-royal text-white font-semibold"
                            @click="mobileMenuOpen = false"
                        >
                            About
                        </router-link>
                        <router-link
                            to="/contact"
                            class="block px-4 py-3 rounded-lg text-gray-700 hover:bg-royal-50 hover:text-royal-600 transition-all font-medium"
                            active-class="bg-gradient-royal text-white font-semibold"
                            @click="mobileMenuOpen = false"
                        >
                            Contact
                        </router-link>
                    </nav>

                    <!-- Sidebar Footer -->
                    <div class="p-6 border-t border-royal-100 space-y-2">
                        <router-link
                            to="/cart"
                            class="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-royal-50 hover:text-royal-600 transition-all font-medium"
                            @click="mobileMenuOpen = false"
                        >
                            <ShoppingCart class="h-5 w-5 mr-3" />
                            Cart (3)
                        </router-link>
                        <router-link
                            to="/profile/dashboard"
                            class="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-royal-50 hover:text-royal-600 transition-all font-medium"
                            @click="mobileMenuOpen = false"
                        >
                            <User class="h-5 w-5 mr-3" />
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
        <footer class="bg-gradient-royal text-white mt-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <!-- Brand -->
                    <div class="col-span-1">
                        <div class="flex items-center space-x-2 mb-4">
                            <Mountain class="h-8 w-8 text-gold-400" />
                            <span class="text-xl font-display font-bold"
                                >TravelTax</span
                            >
                        </div>
                        <p class="text-cream-100 text-sm">
                            Discover Bangladesh's hidden gems with expertly
                            curated tours and premium travel gear.
                        </p>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h3 class="font-display font-semibold text-lg mb-4">
                            Explore
                        </h3>
                        <ul class="space-y-2">
                            <li>
                                <router-link
                                    to="/events"
                                    class="text-cream-100 hover:text-gold-400 transition-colors text-sm"
                                >
                                    Browse Tours
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    to="/shop"
                                    class="text-cream-100 hover:text-gold-400 transition-colors text-sm"
                                >
                                    Shop Gear
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    to="/about"
                                    class="text-cream-100 hover:text-gold-400 transition-colors text-sm"
                                >
                                    About Us
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    to="/contact"
                                    class="text-cream-100 hover:text-gold-400 transition-colors text-sm"
                                >
                                    Contact
                                </router-link>
                            </li>
                        </ul>
                    </div>

                    <!-- Account -->
                    <div>
                        <h3 class="font-display font-semibold text-lg mb-4">
                            My Account
                        </h3>
                        <ul class="space-y-2">
                            <li>
                                <router-link
                                    to="/profile/bookings"
                                    class="text-cream-100 hover:text-gold-400 transition-colors text-sm"
                                >
                                    My Bookings
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    to="/profile/orders"
                                    class="text-cream-100 hover:text-gold-400 transition-colors text-sm"
                                >
                                    My Orders
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    to="/profile/settings"
                                    class="text-cream-100 hover:text-gold-400 transition-colors text-sm"
                                >
                                    Settings
                                </router-link>
                            </li>
                        </ul>
                    </div>

                    <!-- Social -->
                    <div>
                        <h3 class="font-display font-semibold text-lg mb-4">
                            Connect
                        </h3>
                        <p class="text-cream-100 text-sm mb-4">
                            Follow us for travel inspiration
                        </p>
                        <div class="flex space-x-4">
                            <a
                                href="#facebook"
                                class="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-cream-100 hover:bg-gold-500 hover:text-white transition-all"
                            >
                                <Facebook class="h-5 w-5" />
                            </a>
                            <a
                                href="#instagram"
                                class="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-cream-100 hover:bg-gold-500 hover:text-white transition-all"
                            >
                                <Instagram class="h-5 w-5" />
                            </a>
                            <a
                                href="#twitter"
                                class="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-cream-100 hover:bg-gold-500 hover:text-white transition-all"
                            >
                                <Twitter class="h-5 w-5" />
                            </a>
                            <a
                                href="#youtube"
                                class="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-cream-100 hover:bg-gold-500 hover:text-white transition-all"
                            >
                                <Youtube class="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Copyright -->
                <div class="border-t border-white/20 mt-8 pt-8 text-center">
                    <p class="text-cream-100 text-sm">
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
/* Luxury theme colors */
.bg-gradient-royal {
    background: linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%);
}

.shadow-luxury {
    box-shadow: 0 10px 40px rgba(74, 20, 140, 0.2);
}

.shadow-luxury-lg {
    box-shadow: 0 20px 60px rgba(74, 20, 140, 0.3);
}

.text-royal-600 {
    color: #8e24aa;
}

.text-royal-900 {
    color: #4a148c;
}

.text-gold-400 {
    color: #e9d087;
}

.text-gold-500 {
    color: #d4af37;
}

.text-cream-100 {
    color: #fdfbf7;
}

.bg-royal-50 {
    background-color: #f3e5f5;
}

.bg-royal-100 {
    background-color: #e1bee7;
}

.bg-gold-500 {
    background-color: #d4af37;
}

.border-royal-100 {
    border-color: #e1bee7;
}

.hover\:text-royal-600:hover {
    color: #8e24aa;
}

.hover\:text-gold-400:hover {
    color: #e9d087;
}

.hover\:text-gold-500:hover {
    color: #d4af37;
}

.hover\:bg-royal-50:hover {
    background-color: #f3e5f5;
}

.hover\:bg-gold-500:hover {
    background-color: #d4af37;
}

.bg-neutral-50 {
    background-color: #f3f4f6;
}
</style>
