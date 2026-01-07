<template>
    <div>
        <!-- Hero Section -->
        <div
            class="relative h-[600px] bg-gradient-to-r from-primary-900 to-primary-700 text-white"
        >
            <div class="absolute inset-0 bg-black opacity-20"></div>
            <div
                class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center"
            >
                <div class="max-w-2xl">
                    <h1 class="text-5xl md:text-6xl font-bold mb-6">
                        Discover Bangladesh's Hidden Gems
                    </h1>
                    <p class="text-xl mb-8 text-gray-100">
                        Expertly curated tours and premium travel gear for your
                        next adventure
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <router-link
                            to="/events"
                            class="bg-secondary-500 text-white px-8 py-4 rounded-lg hover:bg-secondary-600 transition-colors font-semibold text-lg"
                        >
                            Explore Tours
                        </router-link>
                        <router-link
                            to="/shop"
                            class="bg-white text-primary-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                        >
                            Shop Gear
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <!-- Features -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div
                        class="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                        <MapPin class="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">
                        Curated Tours
                    </h3>
                    <p class="text-gray-600">
                        Handpicked destinations across Bangladesh
                    </p>
                </div>
                <div class="text-center">
                    <div
                        class="h-16 w-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                        <ShoppingBag class="h-8 w-8 text-secondary-600" />
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">
                        Premium Gear
                    </h3>
                    <p class="text-gray-600">
                        Quality equipment for every adventure
                    </p>
                </div>
                <div class="text-center">
                    <div
                        class="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                        <Shield class="h-8 w-8 text-green-600" />
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">
                        Safe & Secure
                    </h3>
                    <p class="text-gray-600">
                        Trusted payment and verified tours
                    </p>
                </div>
            </div>
        </div>

        <!-- Featured Tours -->
        <div class="bg-gray-50 py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        Featured Tours
                    </h2>
                    <p class="text-lg text-gray-600">
                        Popular destinations loved by travelers
                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div
                        v-for="event in featuredEvents"
                        :key="event.id"
                        class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                        @click="$router.push(`/events/${event.slug}`)"
                    >
                        <img
                            :src="event.image"
                            :alt="event.title"
                            class="w-full h-48 object-cover"
                        />
                        <div class="p-6">
                            <h3 class="font-bold text-gray-900 mb-2">
                                {{ event.title }}
                            </h3>
                            <p class="text-sm text-gray-600 mb-4">
                                {{ event.description }}
                            </p>
                            <div class="flex items-center justify-between">
                                <span class="text-lg font-bold text-primary-600"
                                    >৳{{ event.price.toLocaleString() }}</span
                                >
                                <span class="text-sm text-gray-500">{{
                                    event.duration
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-8">
                    <router-link
                        to="/events"
                        class="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                    >
                        View All Tours
                    </router-link>
                </div>
            </div>
        </div>

        <!-- CTA Section -->
        <div class="bg-primary-900 text-white py-16">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-4xl font-bold mb-4">
                    Ready for Your Next Adventure?
                </h2>
                <p class="text-xl text-gray-200 mb-8">
                    Join thousands of travelers exploring Bangladesh
                </p>
                <router-link
                    to="/events"
                    class="inline-block bg-secondary-500 text-white px-8 py-4 rounded-lg hover:bg-secondary-600 transition-colors font-semibold text-lg"
                >
                    Start Exploring
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { MapPin, Shield, ShoppingBag } from "lucide-vue-next";
import { computed } from "vue";
import { events } from "../data/mockData";

const featuredEvents = computed(() => events.slice(0, 3));
</script>

<style scoped>
.from-primary-900 {
    --tw-gradient-from: #1e3a8a;
}

.to-primary-700 {
    --tw-gradient-to: #1d4ed8;
}

.bg-primary-100 {
    background-color: #dbeafe;
}

.bg-primary-600 {
    background-color: #1e40af;
}

.bg-primary-700 {
    background-color: #1d4ed8;
}

.bg-primary-900 {
    background-color: #1e3a8a;
}

.text-primary-600 {
    color: #1e40af;
}

.text-primary-900 {
    color: #1e3a8a;
}

.bg-secondary-100 {
    background-color: #fef3c7;
}

.bg-secondary-500 {
    background-color: #f59e0b;
}

.bg-secondary-600 {
    background-color: #d97706;
}

.text-secondary-600 {
    color: #d97706;
}

.hover\:bg-primary-700:hover {
    background-color: #1d4ed8;
}

.hover\:bg-secondary-600:hover {
    background-color: #d97706;
}
</style>
