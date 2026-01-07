<template>
    <div>
        <h1 class="text-3xl font-bold text-white mb-8">Manage Orders</h1>

        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <table class="w-full">
                <thead class="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                            Order ID
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                            Date
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                            Total
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                            Payment Method
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                            Payment Status
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                            Order Status
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
                        v-for="order in orders"
                        :key="order.id"
                        class="hover:bg-gray-50"
                    >
                        <td class="px-6 py-4 text-sm font-medium text-gray-900">
                            {{ order.id }}
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-500">
                            {{ formatDate(order.date) }}
                        </td>
                        <td
                            class="px-6 py-4 text-sm font-semibold text-gray-900"
                        >
                            ৳{{ order.total.toLocaleString() }}
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-500">
                            {{ order.paymentMethod }}
                        </td>
                        <td class="px-6 py-4 text-sm">
                            <span
                                class="px-2 py-1 rounded-full text-xs font-medium"
                                :class="
                                    getPaymentStatusClass(order.paymentStatus)
                                "
                            >
                                {{ order.paymentStatus }}
                            </span>
                        </td>
                        <td class="px-6 py-4 text-sm">
                            <select
                                :value="order.status"
                                class="text-sm border border-gray-300 rounded px-2 py-1"
                            >
                                <option>Processing</option>
                                <option>Shipped</option>
                                <option>Delivered</option>
                                <option>Cancelled</option>
                            </select>
                        </td>
                        <td class="px-6 py-4 text-sm space-x-2">
                            <button
                                v-if="
                                    order.paymentMethod === 'bKash' &&
                                    order.paymentStatus === 'Pending'
                                "
                                class="text-green-600 hover:text-green-800 text-xs font-medium"
                            >
                                Verify
                            </button>
                            <button class="text-blue-600 hover:text-blue-800">
                                <Eye class="h-4 w-4" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { Eye } from "lucide-vue-next";
import { orders } from "../../data/mockData";

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

const getPaymentStatusClass = (status) => {
    const classes = {
        Verified: "bg-green-100 text-green-700",
        Pending: "bg-yellow-100 text-yellow-700",
        Paid: "bg-green-100 text-green-700",
        Failed: "bg-red-100 text-red-700",
    };
    return classes[status] || "bg-gray-100 text-gray-700";
};
</script>
