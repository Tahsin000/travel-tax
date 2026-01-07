<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Header -->
        <div class="mb-8">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">
                Explore Bangladesh
            </h1>
            <p class="text-lg text-gray-600">
                Discover amazing tours and adventures across the country
            </p>
        </div>

        <div class="flex flex-col lg:flex-row gap-8">
            <!-- Sidebar Filters (FE_03) -->
            <aside class="lg:w-64 flex-shrink-0">
                <div class="bg-white rounded-xl shadow-md p-6 sticky top-24">
                    <h3 class="text-lg font-bold text-gray-900 mb-4">
                        Filters
                    </h3>

                    <!-- Budget Filter -->
                    <div class="mb-6">
                        <h4 class="font-semibold text-gray-700 mb-3">Budget</h4>
                        <div class="space-y-2">
                            <label class="flex items-center">
                                <input
                                    type="checkbox"
                                    value="budget"
                                    v-model="selectedBudgets"
                                    class="rounded border-gray-300 text-royal-600 focus:ring-royal-500"
                                />
                                <span class="ml-2 text-sm text-gray-600"
                                    >Budget (< ৳10,000)</span
                                >
                            </label>
                            <label class="flex items-center">
                                <input
                                    type="checkbox"
                                    value="mid"
                                    v-model="selectedBudgets"
                                    class="rounded border-gray-300 text-royal-600 focus:ring-royal-500"
                                />
                                <span class="ml-2 text-sm text-gray-600"
                                    >Mid-Range (৳10k-20k)</span
                                >
                            </label>
                            <label class="flex items-center">
                                <input
                                    type="checkbox"
                                    value="premium"
                                    v-model="selectedBudgets"
                                    class="rounded border-gray-300 text-royal-600 focus:ring-royal-500"
                                />
                                <span class="ml-2 text-sm text-gray-600"
                                    >Premium (> ৳20,000)</span
                                >
                            </label>
                        </div>
                    </div>

                    <!-- Duration Filter -->
                    <div class="mb-6">
                        <h4 class="font-semibold text-gray-700 mb-3">
                            Duration
                        </h4>
                        <div class="space-y-2">
                            <label class="flex items-center">
                                <input
                                    type="checkbox"
                                    value="1-2"
                                    v-model="selectedDurations"
                                    class="rounded border-gray-300 text-royal-600 focus:ring-royal-500"
                                />
                                <span class="ml-2 text-sm text-gray-600"
                                    >1-2 Days</span
                                >
                            </label>
                            <label class="flex items-center">
                                <input
                                    type="checkbox"
                                    value="3-4"
                                    v-model="selectedDurations"
                                    class="rounded border-gray-300 text-royal-600 focus:ring-royal-500"
                                />
                                <span class="ml-2 text-sm text-gray-600"
                                    >3-4 Days</span
                                >
                            </label>
                            <label class="flex items-center">
                                <input
                                    type="checkbox"
                                    value="5+"
                                    v-model="selectedDurations"
                                    class="rounded border-gray-300 text-royal-600 focus:ring-royal-500"
                                />
                                <span class="ml-2 text-sm text-gray-600"
                                    >5+ Days</span
                                >
                            </label>
                        </div>
                    </div>

                    <!-- Region Filter -->
                    <div>
                        <h4 class="font-semibold text-gray-700 mb-3">Region</h4>
                        <div class="space-y-2">
                            <label class="flex items-center">
                                <input
                                    type="checkbox"
                                    value="coastal"
                                    v-model="selectedRegions"
                                    class="rounded border-gray-300 text-royal-600 focus:ring-royal-500"
                                />
                                <span class="ml-2 text-sm text-gray-600"
                                    >Coastal</span
                                >
                            </label>
                            <label class="flex items-center">
                                <input
                                    type="checkbox"
                                    value="hill"
                                    v-model="selectedRegions"
                                    class="rounded border-gray-300 text-royal-600 focus:ring-royal-500"
                                />
                                <span class="ml-2 text-sm text-gray-600"
                                    >Hill</span
                                >
                            </label>
                            <label class="flex items-center">
                                <input
                                    type="checkbox"
                                    value="forest"
                                    v-model="selectedRegions"
                                    class="rounded border-gray-300 text-royal-600 focus:ring-royal-500"
                                />
                                <span class="ml-2 text-sm text-gray-600"
                                    >Forest</span
                                >
                            </label>
                        </div>
                    </div>
                </div>
            </aside>

            <!-- Main Content -->
            <div class="flex-1">
                <!-- Search Bar -->
                <div class="mb-6">
                    <input
                        v-model="searchQuery"
                        type="text"
                        placeholder="Search tours..."
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500"
                    />
                </div>

                <!-- Events Grid -->
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <div
                        v-for="event in filteredEvents"
                        :key="event.id"
                        class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                        @click="navigateToEvent(event.slug)"
                    >
                        <!-- Image -->
                        <div class="relative h-48 overflow-hidden">
                            <img
                                :src="event.image"
                                :alt="event.title"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <!-- Price Badge -->
                            <div
                                class="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                            >
                                ৳{{ event.price.toLocaleString() }}
                            </div>
                            <!-- Seats Left Badge (FE_03) -->
                            <div
                                v-if="event.seats_left <= 10"
                                class="absolute top-3 left-3 bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center space-x-1"
                            >
                                <AlertCircle class="h-3 w-3" />
                                <span>{{ event.seats_left }} seats left</span>
                            </div>
                        </div>

                        <!-- Content -->
                        <div class="p-5">
                            <h3
                                class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors"
                            >
                                {{ event.title }}
                            </h3>
                            <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                                {{ event.description }}
                            </p>

                            <!-- Meta Info -->
                            <div
                                class="flex items-center justify-between text-xs text-gray-500 mb-4"
                            >
                                <div class="flex items-center space-x-1">
                                    <Clock class="h-4 w-4" />
                                    <span>{{ event.duration }}</span>
                                </div>
                                <div class="flex items-center space-x-1">
                                    <Calendar class="h-4 w-4" />
                                    <span>{{ formatDate(event.date) }}</span>
                                </div>
                            </div>

                            <!-- CTA -->
                            <button
                                class="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Empty State -->
                <div
                    v-if="filteredEvents.length === 0"
                    class="text-center py-16"
                >
                    <Compass class="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 class="text-xl font-semibold text-gray-700 mb-2">
                        No tours found
                    </h3>
                    <p class="text-gray-500">Try adjusting your filters</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { AlertCircle, Calendar, Clock, Compass } from "lucide-vue-next";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { events } from "../../data/mockData";

const router = useRouter();

// Search and filter state
const searchQuery = ref("");
const selectedBudgets = ref([]);
const selectedDurations = ref([]);
const selectedRegions = ref([]);

// Computed filtered events
const filteredEvents = computed(() => {
    let result = [...events];

    // Apply search filter
    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        result = result.filter(
            (event) =>
                event.title.toLowerCase().includes(query) ||
                event.description.toLowerCase().includes(query) ||
                event.location.toLowerCase().includes(query)
        );
    }

    // Apply budget filters
    if (selectedBudgets.value.length > 0) {
        result = result.filter((event) => {
            const price = event.price;
            return selectedBudgets.value.some((budget) => {
                if (budget === "budget") return price < 10000;
                if (budget === "mid") return price >= 10000 && price <= 20000;
                if (budget === "premium") return price > 20000;
                return false;
            });
        });
    }

    // Apply duration filters
    if (selectedDurations.value.length > 0) {
        result = result.filter((event) => {
            const duration = event.duration.toLowerCase();
            return selectedDurations.value.some((dur) => {
                if (dur === "1-2")
                    return duration.includes("1") || duration.includes("2");
                if (dur === "3-4")
                    return duration.includes("3") || duration.includes("4");
                if (dur === "5+") return parseInt(duration) >= 5;
                return false;
            });
        });
    }

    // Apply region filters
    if (selectedRegions.value.length > 0) {
        result = result.filter((event) => {
            const location = event.location.toLowerCase();
            return selectedRegions.value.some((region) => {
                if (region === "coastal")
                    return (
                        location.includes("cox") ||
                        location.includes("beach") ||
                        location.includes("coastal")
                    );
                if (region === "hill")
                    return (
                        location.includes("bandarban") ||
                        location.includes("hill") ||
                        location.includes("rangamati")
                    );
                if (region === "forest")
                    return (
                        location.includes("sundarbans") ||
                        location.includes("forest")
                    );
                return false;
            });
        });
    }

    return result;
});

const navigateToEvent = (slug) => {
    router.push(`/events/${slug}`);
};

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
    });
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
    line-clamp: 2; /* Standard property for compatibility */
}
</style>
