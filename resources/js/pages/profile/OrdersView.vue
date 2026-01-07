<template>
    <div>
        <h1 class="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>

        <div class="space-y-6">
            <div
                v-for="order in orders"
                :key="order.id"
                class="bg-white rounded-lg shadow-md p-6"
            >
                <div
                    class="flex items-center justify-between mb-4 pb-4 border-b border-gray-200"
                >
                    <div>
                        <h3 class="font-semibold text-gray-900">
                            Order {{ order.id }}
                        </h3>
                        <p class="text-sm text-gray-500">
                            {{ formatDate(order.date) }}
                        </p>
                    </div>
                    <div class="text-right">
                        <span
                            class="px-3 py-1 rounded-full text-xs font-medium"
                            :class="getStatusClass(order.status)"
                        >
                            {{ order.status }}
                        </span>
                        <p class="text-sm text-gray-500 mt-1">
                            {{ order.paymentMethod }}
                        </p>
                    </div>
                </div>

                <div class="space-y-2 mb-4">
                    <div
                        v-for="(item, index) in order.items"
                        :key="index"
                        class="flex justify-between text-sm"
                    >
                        <span class="text-gray-700"
                            >{{ item.name }} x {{ item.quantity }}</span
                        >
                        <span class="font-medium"
                            >৳{{
                                (item.price * item.quantity).toLocaleString()
                            }}</span
                        >
                    </div>
                </div>

                <div class="pt-4 border-t border-gray-200">
                    <div class="flex justify-between text-sm mb-1">
                        <span class="text-gray-600">Subtotal</span>
                        <span>৳{{ order.subtotal.toLocaleString() }}</span>
                    </div>
                    <div class="flex justify-between text-sm mb-1">
                        <span class="text-gray-600">Tax</span>
                        <span>৳{{ order.tax.toLocaleString() }}</span>
                    </div>
                    <div class="flex justify-between font-bold text-lg mt-2">
                        <span>Total</span>
                        <span>৳{{ order.total.toLocaleString() }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { orders } from "../../data/mockData";

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

const getStatusClass = (status) => {
    const classes = {
        Delivered: "bg-green-100 text-green-700",
        Processing: "bg-blue-100 text-blue-700",
        Shipped: "bg-purple-100 text-purple-700",
        Cancelled: "bg-red-100 text-red-700",
    };
    return classes[status] || "bg-gray-100 text-gray-700";
};
</script>
