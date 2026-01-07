<template>
    <div>
        <!-- Hero Section with Background Image -->
        <div class="relative h-[700px] overflow-hidden">
            <!-- Background Image -->
            <div
                class="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style="
                    background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80');
                "
            ></div>
            <!-- Overlay -->
            <div
                class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"
            ></div>

            <!-- Hero Content -->
            <div
                class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center"
            >
                <div class="max-w-3xl">
                    <h1
                        class="text-6xl md:text-7xl font-bold mb-6 text-white leading-tight"
                    >
                        Explore the Unseen
                    </h1>
                    <p class="text-xl md:text-2xl mb-8 text-gray-100">
                        Discover Bangladesh's hidden treasures and embark on
                        unforgettable adventures
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <router-link
                            to="/events"
                            class="bg-secondary-500 text-white px-10 py-4 rounded-lg hover:bg-secondary-600 transition-all hover:scale-105 font-semibold text-lg shadow-xl"
                        >
                            Start Your Journey
                        </router-link>
                        <router-link
                            to="/shop"
                            class="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-primary-900 transition-all font-semibold text-lg"
                        >
                            Shop Gear
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <!-- Category Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">
                    Explore by Category
                </h2>
                <p class="text-lg text-gray-600">Choose your adventure style</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                    v-for="category in categories"
                    :key="category.id"
                    class="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                    @click="$router.push(category.link)"
                >
                    <!-- Background Image with Zoom Effect -->
                    <div
                        class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        :style="`background-image: url('${category.image}')`"
                    ></div>

                    <!-- Gradient Overlay -->
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    ></div>

                    <!-- Content -->
                    <div class="relative h-full flex flex-col justify-end p-6">
                        <div
                            class="transform transition-transform duration-300 group-hover:-translate-y-2"
                        >
                            <component
                                :is="category.icon"
                                class="h-10 w-10 text-white mb-3"
                            />
                            <h3 class="text-2xl font-bold text-white mb-2">
                                {{ category.name }}
                            </h3>
                            <p class="text-gray-200 text-sm mb-3">
                                {{ category.description }}
                            </p>
                            <div
                                class="flex items-center text-secondary-400 font-medium"
                            >
                                <span>Explore</span>
                                <ArrowRight
                                    class="h-4 w-4 ml-2 transform transition-transform group-hover:translate-x-2"
                                />
                            </div>
                        </div>
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
import {
    ArrowRight,
    Camera,
    MapPin,
    Mountain,
    Shield,
    ShoppingBag,
    Tent,
    Waves,
} from "lucide-vue-next";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { getOrganizationSchema, useSEO } from "../composables/useSEO";
import { events } from "../data/mockData";

const router = useRouter();

// SEO Configuration
useSEO({
    title: "TravelTax - Discover Bangladesh's Hidden Treasures | Premium Travel Tours",
    description:
        "Explore Bangladesh with TravelTax. Curated luxury tours, premium travel gear, and unforgettable adventures. Book your next journey today.",
    keywords:
        "travel bangladesh, tours, adventure, trekking, camping, travel gear, cox's bazar, bandarban, sundarbans, luxury tours",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop",
    type: "website",
    structuredData: {
        "@context": "https://schema.org",
        "@graph": [
            getOrganizationSchema(),
            {
                "@type": "WebSite",
                name: "TravelTax",
                url: "https://traveltax.com",
                potentialAction: {
                    "@type": "SearchAction",
                    target: "https://traveltax.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                },
            },
        ],
    },
});

const featuredEvents = computed(() => events.slice(0, 3));

// Category data for FE_02
const categories = [
    {
        id: 1,
        name: "Trekking",
        description: "Conquer peaks and mountain trails",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
        icon: Mountain,
        link: "/events",
    },
    {
        id: 2,
        name: "Camping",
        description: "Sleep under the stars",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
        icon: Tent,
        link: "/events",
    },
    {
        id: 3,
        name: "Beach Tours",
        description: "Relax by pristine coastlines",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
        icon: Waves,
        link: "/events",
    },
    {
        id: 4,
        name: "Photography",
        description: "Capture breathtaking moments",
        image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
        icon: Camera,
        link: "/events",
    },
];
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

.text-secondary-400 {
    color: #fbbf24;
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
