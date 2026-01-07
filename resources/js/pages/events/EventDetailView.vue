<template>
    <div v-if="event" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Hero Image -->
        <div class="relative h-96 rounded-2xl overflow-hidden mb-8">
            <img
                :src="event.image"
                :alt="event.title"
                class="w-full h-full object-cover"
            />
            <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end"
            >
                <div class="p-8 text-white">
                    <h1 class="text-4xl font-bold mb-2">{{ event.title }}</h1>
                    <div class="flex items-center space-x-4 text-sm">
                        <div class="flex items-center space-x-1">
                            <MapPin class="h-4 w-4" />
                            <span>{{ event.location }}</span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <Clock class="h-4 w-4" />
                            <span>{{ event.duration }}</span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <Users class="h-4 w-4" />
                            <span>Max {{ event.maxGuests }} guests</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Main Content -->
            <div class="lg:col-span-2 space-y-8">
                <!-- Description -->
                <div class="bg-white rounded-xl shadow-md p-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">
                        About This Tour
                    </h2>
                    <p class="text-gray-700 leading-relaxed">
                        {{ event.fullDescription }}
                    </p>
                </div>

                <!-- Itinerary -->
                <div class="bg-white rounded-xl shadow-md p-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-6">
                        Itinerary
                    </h2>
                    <div class="space-y-4">
                        <div
                            v-for="day in event.itinerary"
                            :key="day.day"
                            class="flex space-x-4 pb-4 border-b border-gray-200 last:border-0"
                        >
                            <div class="flex-shrink-0">
                                <div
                                    class="h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold"
                                >
                                    {{ day.day }}
                                </div>
                            </div>
                            <div class="flex-1">
                                <h3 class="font-semibold text-gray-900 mb-1">
                                    Day {{ day.day }}: {{ day.title }}
                                </h3>
                                <p class="text-gray-600 text-sm">
                                    {{ day.activities }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- What's Included -->
                <div class="bg-white rounded-xl shadow-md p-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">
                        What's Included
                    </h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div
                            v-for="item in event.included"
                            :key="item"
                            class="flex items-center space-x-2 text-gray-700"
                        >
                            <CheckCircle class="h-5 w-5 text-green-500" />
                            <span>{{ item }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Booking Sidebar -->
            <div class="lg:col-span-1">
                <div class="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                    <div class="mb-6">
                        <div class="text-3xl font-bold text-primary-600 mb-1">
                            ৳{{ selectedPackagePrice.toLocaleString() }}
                        </div>
                        <p class="text-sm text-gray-500">per person</p>
                    </div>

                    <!-- Package Selection (FE_04) -->
                    <div class="mb-6">
                        <label
                            class="block text-sm font-medium text-gray-700 mb-3"
                        >
                            Select Package
                        </label>
                        <div class="space-y-3">
                            <label
                                v-for="pkg in event.packages"
                                :key="pkg.id"
                                class="flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all"
                                :class="
                                    selectedPackage === pkg.id
                                        ? 'border-primary-600 bg-primary-50'
                                        : 'border-gray-200 hover:border-primary-300'
                                "
                            >
                                <input
                                    type="radio"
                                    :value="pkg.id"
                                    v-model="selectedPackage"
                                    class="mt-1 text-primary-600 focus:ring-primary-500"
                                />
                                <div class="ml-3 flex-1">
                                    <div
                                        class="flex items-center justify-between"
                                    >
                                        <span
                                            class="font-semibold text-gray-900"
                                            >{{ pkg.name }}</span
                                        >
                                        <span
                                            class="text-sm font-bold text-primary-600"
                                            >৳{{
                                                pkg.price.toLocaleString()
                                            }}</span
                                        >
                                    </div>
                                    <p class="text-xs text-gray-600 mt-1">
                                        {{ pkg.description }}
                                    </p>
                                </div>
                            </label>
                        </div>
                    </div>

                    <!-- Booking Form -->
                    <div class="space-y-4 mb-6">
                        <div>
                            <label
                                class="block text-sm font-medium text-gray-700 mb-2"
                                >Select Date</label
                            >
                            <input
                                type="date"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div>
                            <label
                                class="block text-sm font-medium text-gray-700 mb-2"
                                >Number of Guests</label
                            >
                            <select
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                            >
                                <option
                                    v-for="n in event.maxGuests"
                                    :key="n"
                                    :value="n"
                                >
                                    {{ n }} {{ n === 1 ? "Guest" : "Guests" }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <!-- Book Button -->
                    <button
                        @click="bookNow"
                        class="w-full bg-secondary-500 text-white py-3 rounded-lg hover:bg-secondary-600 transition-colors font-semibold mb-4"
                    >
                        Book Now
                    </button>

                    <!-- Contact Info -->
                    <div class="pt-4 border-t border-gray-200 text-center">
                        <p class="text-sm text-gray-600 mb-2">Need help?</p>
                        <a
                            href="#contact"
                            class="text-primary-600 hover:text-primary-700 font-medium text-sm"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Back Button -->
        <div class="mt-8">
            <button
                @click="$router.push('/events')"
                class="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
                <ArrowLeft class="h-5 w-5" />
                <span>Back to all tours</span>
            </button>
        </div>
    </div>

    <!-- Not Found -->
    <div v-else class="max-w-4xl mx-auto px-4 py-16 text-center">
        <AlertCircle class="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Tour Not Found</h2>
        <p class="text-gray-600 mb-6">
            The tour you're looking for doesn't exist.
        </p>
        <button
            @click="$router.push('/events')"
            class="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
            Browse All Tours
        </button>
    </div>
</template>

<script setup>
import {
    AlertCircle,
    ArrowLeft,
    CheckCircle,
    Clock,
    MapPin,
    Users,
} from "lucide-vue-next";
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
    getBreadcrumbSchema,
    getEventSchema,
    useSEO,
} from "../../composables/useSEO";
import { events } from "../../data/mockData";

const route = useRoute();
const router = useRouter();

const event = computed(() => {
    return events.find((e) => e.slug === route.params.slug);
});

// Dynamic SEO based on event data
watch(
    event,
    (currentEvent) => {
        if (currentEvent) {
            useSEO({
                title: `${currentEvent.title} - ${currentEvent.duration} Tour | TravelTax`,
                description: currentEvent.description.substring(0, 155) + "...",
                keywords: `${currentEvent.title}, ${currentEvent.location}, ${currentEvent.category}, bangladesh tour, travel`,
                image: currentEvent.image,
                type: "article",
                structuredData: {
                    "@context": "https://schema.org",
                    "@graph": [
                        getEventSchema(currentEvent),
                        getBreadcrumbSchema([
                            { name: "Home", url: "https://traveltax.com" },
                            {
                                name: "Events",
                                url: "https://traveltax.com/events",
                            },
                            {
                                name: currentEvent.title,
                                url: `https://traveltax.com/events/${currentEvent.slug}`,
                            },
                        ]),
                    ],
                },
            });
        }
    },
    { immediate: true }
);

// Package selection (FE_04)
const selectedPackage = ref("economy");

const selectedPackagePrice = computed(() => {
    if (!event.value || !event.value.packages) return event.value?.price || 0;
    const pkg = event.value.packages.find(
        (p) => p.id === selectedPackage.value
    );
    return pkg ? pkg.price : event.value.price;
});

const bookNow = () => {
    // Navigate to checkout with event info
    router.push("/checkout");
};
</script>

<style scoped>
.bg-primary-50 {
    background-color: #eff6ff;
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

.text-primary-600 {
    color: #1e40af;
}

.text-primary-700 {
    color: #1d4ed8;
}

.bg-secondary-500 {
    background-color: #f59e0b;
}

.bg-secondary-600 {
    background-color: #d97706;
}

.focus\:ring-primary-500:focus {
    --tw-ring-color: #1e40af;
}

.hover\:bg-primary-700:hover {
    background-color: #1d4ed8;
}

.hover\:bg-secondary-600:hover {
    background-color: #d97706;
}

.hover\:text-primary-600:hover {
    color: #1e40af;
}

.hover\:text-primary-700:hover {
    color: #1d4ed8;
}
</style>
