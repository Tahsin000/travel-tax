<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Header -->
        <div class="mb-12">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">
                Explore Bangladesh
            </h1>
            <p class="text-lg text-gray-600">
                Discover amazing tours and adventures across the country
            </p>
        </div>

        <!-- Filters (UI Only) -->
        <div class="mb-8 flex flex-wrap gap-4">
            <div class="flex-1 min-w-[200px]">
                <input
                    type="text"
                    placeholder="Search tours..."
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
            </div>
            <select
                class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
                <option>All Locations</option>
                <option>Cox's Bazar</option>
                <option>Sylhet</option>
                <option>Sundarbans</option>
            </select>
            <select
                class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
                <option>All Durations</option>
                <option>1-2 Days</option>
                <option>3-4 Days</option>
                <option>5+ Days</option>
            </select>
        </div>

        <!-- Events Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
                v-for="event in events"
                :key="event.id"
                class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                @click="navigateToEvent(event.slug)"
            >
                <!-- Image -->
                <div class="relative h-56 overflow-hidden">
                    <img
                        :src="event.image"
                        :alt="event.title"
                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div
                        class="absolute top-4 right-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                    >
                        ৳{{ event.price.toLocaleString() }}
                    </div>
                </div>

                <!-- Content -->
                <div class="p-6">
                    <h3
                        class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors"
                    >
                        {{ event.title }}
                    </h3>
                    <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                        {{ event.description }}
                    </p>

                    <!-- Meta Info -->
                    <div
                        class="flex items-center justify-between text-sm text-gray-500"
                    >
                        <div class="flex items-center space-x-1">
                            <Clock class="h-4 w-4" />
                            <span>{{ event.duration }}</span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <MapPin class="h-4 w-4" />
                            <span>{{ event.location }}</span>
                        </div>
                    </div>

                    <!-- CTA -->
                    <button
                        class="mt-4 w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>

        <!-- Empty State -->
        <div v-if="events.length === 0" class="text-center py-16">
            <Compass class="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 class="text-xl font-semibold text-gray-700 mb-2">
                No tours found
            </h3>
            <p class="text-gray-500">Try adjusting your filters</p>
        </div>
    </div>
</template>

<script setup>
import { Clock, Compass, MapPin } from "lucide-vue-next";
import { useRouter } from "vue-router";
import { events } from "../../data/mockData";

const router = useRouter();

const navigateToEvent = (slug) => {
    router.push(`/events/${slug}`);
};
</script>

<style scoped>
.bg-primary-600 {
    background-color: #1e40af;
}

.bg-primary-700 {
    background-color: #1d4ed8;
}

.text-primary-600 {
    color: #1e40af;
}

.bg-secondary-500 {
    background-color: #f59e0b;
}

.focus\:ring-primary-500:focus {
    --tw-ring-color: #1e40af;
}

.hover\:bg-primary-700:hover {
    background-color: #1d4ed8;
}

.hover\:text-primary-600:hover {
    color: #1e40af;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
