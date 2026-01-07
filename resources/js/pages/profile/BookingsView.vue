<template>
    <div>
        <h1 class="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>

        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <table class="w-full">
                <thead class="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Booking ID
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Event
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Date
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Guests
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Amount
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr
                        v-for="booking in bookings"
                        :key="booking.id"
                        class="hover:bg-gray-50"
                    >
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                        >
                            {{ booking.id }}
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-900">
                            {{ booking.eventName }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                        >
                            {{ formatDate(booking.date) }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                        >
                            {{ booking.guests }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900"
                        >
                            ৳{{ booking.totalAmount.toLocaleString() }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span
                                class="px-3 py-1 rounded-full text-xs font-medium"
                                :class="getStatusClass(booking.status)"
                            >
                                {{ booking.status }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { bookings } from "../../data/mockData";

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

const getStatusClass = (status) => {
    const classes = {
        Confirmed: "bg-green-100 text-green-700",
        Upcoming: "bg-blue-100 text-blue-700",
        Completed: "bg-gray-100 text-gray-700",
        Cancelled: "bg-red-100 text-red-700",
    };
    return classes[status] || "bg-gray-100 text-gray-700";
};
</script>
