<template>
    <div>
        <div class="flex items-center justify-between mb-8">
            <h1 class="text-3xl font-bold text-white">Manage Events</h1>
            <button
                class="bg-secondary-500 text-white px-6 py-3 rounded-lg hover:bg-secondary-600 transition-colors font-semibold flex items-center space-x-2"
            >
                <Plus class="h-5 w-5" />
                <span>Add New Event</span>
            </button>
        </div>

        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <table class="w-full">
                <thead class="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                            Event Name
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                            Location
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                            Duration
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                            Price
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                            Max Guests
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr
                        v-for="event in events"
                        :key="event.id"
                        class="hover:bg-gray-50"
                    >
                        <td class="px-6 py-4 text-sm font-medium text-gray-900">
                            {{ event.title }}
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-500">
                            {{ event.location }}
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-500">
                            {{ event.duration }}
                        </td>
                        <td
                            class="px-6 py-4 text-sm font-semibold text-gray-900"
                        >
                            ৳{{ event.price.toLocaleString() }}
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-500">
                            {{ event.maxGuests }}
                        </td>
                        <td class="px-6 py-4 text-sm space-x-2">
                            <button class="text-blue-600 hover:text-blue-800">
                                <Edit class="h-4 w-4" />
                            </button>
                            <button class="text-red-600 hover:text-red-800">
                                <Trash2 class="h-4 w-4" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { Edit, Plus, Trash2 } from "lucide-vue-next";
import { events } from "../../data/mockData";
</script>

<style scoped>
.bg-secondary-500 {
    background-color: #f59e0b;
}

.bg-secondary-600 {
    background-color: #d97706;
}

.hover\:bg-secondary-600:hover {
    background-color: #d97706;
}
</style>
