<template>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <!-- Step Indicator -->
        <div class="mb-12">
            <div class="flex items-center justify-between">
                <div
                    v-for="(step, index) in steps"
                    :key="index"
                    class="flex items-center"
                    :class="index < steps.length - 1 ? 'flex-1' : ''"
                >
                    <div class="flex flex-col items-center">
                        <div
                            class="h-10 w-10 rounded-full flex items-center justify-center font-semibold"
                            :class="
                                currentStep >= index + 1
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-gray-200 text-gray-500'
                            "
                        >
                            {{ index + 1 }}
                        </div>
                        <span
                            class="text-sm mt-2 font-medium"
                            :class="
                                currentStep >= index + 1
                                    ? 'text-primary-600'
                                    : 'text-gray-500'
                            "
                        >
                            {{ step }}
                        </span>
                    </div>
                    <div
                        v-if="index < steps.length - 1"
                        class="flex-1 h-1 mx-4"
                        :class="
                            currentStep > index + 1
                                ? 'bg-primary-600'
                                : 'bg-gray-200'
                        "
                    ></div>
                </div>
            </div>
        </div>

        <!-- Step 1: Information -->
        <div v-if="currentStep === 1" class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
                Billing Information
            </h2>
            <form @submit.prevent="nextStep" class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label
                            class="block text-sm font-medium text-gray-700 mb-2"
                            >First Name</label
                        >
                        <input
                            v-model="form.firstName"
                            type="text"
                            required
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>
                    <div>
                        <label
                            class="block text-sm font-medium text-gray-700 mb-2"
                            >Last Name</label
                        >
                        <input
                            v-model="form.lastName"
                            type="text"
                            required
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                        >Email</label
                    >
                    <input
                        v-model="form.email"
                        type="email"
                        required
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                        >Phone</label
                    >
                    <input
                        v-model="form.phone"
                        type="tel"
                        required
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                        >Address</label
                    >
                    <textarea
                        v-model="form.address"
                        required
                        rows="3"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    ></textarea>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label
                            class="block text-sm font-medium text-gray-700 mb-2"
                            >City</label
                        >
                        <input
                            v-model="form.city"
                            type="text"
                            required
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>
                    <div>
                        <label
                            class="block text-sm font-medium text-gray-700 mb-2"
                            >State/Division</label
                        >
                        <input
                            v-model="form.state"
                            type="text"
                            required
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>
                    <div>
                        <label
                            class="block text-sm font-medium text-gray-700 mb-2"
                            >Postal Code</label
                        >
                        <input
                            v-model="form.postalCode"
                            type="text"
                            required
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>
                </div>
                <div class="flex justify-end pt-4">
                    <button
                        type="submit"
                        class="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                    >
                        Continue to Review
                    </button>
                </div>
            </form>
        </div>

        <!-- Step 2: Review -->
        <div v-if="currentStep === 2" class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Review Order</h2>

            <div class="mb-6">
                <h3 class="font-semibold text-gray-900 mb-3">
                    Shipping Address
                </h3>
                <div class="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
                    <p>{{ form.firstName }} {{ form.lastName }}</p>
                    <p>{{ form.address }}</p>
                    <p>
                        {{ form.city }}, {{ form.state }} {{ form.postalCode }}
                    </p>
                    <p>{{ form.phone }}</p>
                    <p>{{ form.email }}</p>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="font-semibold text-gray-900 mb-3">Order Items</h3>
                <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                        <span>Sample Product x 2</span>
                        <span>৳7,000</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span>Tax</span>
                        <span>৳700</span>
                    </div>
                    <div class="border-t pt-2 flex justify-between font-bold">
                        <span>Total</span>
                        <span>৳7,700</span>
                    </div>
                </div>
            </div>

            <div class="flex justify-between pt-4">
                <button
                    @click="currentStep--"
                    class="text-gray-600 hover:text-gray-900 font-medium"
                >
                    ← Back
                </button>
                <button
                    @click="nextStep"
                    class="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                >
                    Continue to Payment
                </button>
            </div>
        </div>

        <!-- Step 3: Payment -->
        <div v-if="currentStep === 3" class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
                Payment Method
            </h2>

            <div class="space-y-4 mb-6">
                <label
                    class="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary-500"
                >
                    <input
                        v-model="paymentMethod"
                        type="radio"
                        value="bkash"
                        class="mr-3"
                    />
                    <div class="flex-1">
                        <div class="font-semibold">bKash</div>
                        <div class="text-sm text-gray-500">
                            Pay with bKash mobile wallet
                        </div>
                    </div>
                </label>
                <label
                    class="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary-500"
                >
                    <input
                        v-model="paymentMethod"
                        type="radio"
                        value="cod"
                        class="mr-3"
                    />
                    <div class="flex-1">
                        <div class="font-semibold">Cash on Delivery</div>
                        <div class="text-sm text-gray-500">
                            Pay when you receive
                        </div>
                    </div>
                </label>
            </div>

            <div
                v-if="paymentMethod === 'bkash'"
                class="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6"
            >
                <p class="text-sm text-gray-700">
                    <strong>bKash Number:</strong> 01712-345678<br />
                    Please send payment and keep the transaction ID for
                    verification.
                </p>
            </div>

            <div class="flex justify-between pt-4">
                <button
                    @click="currentStep--"
                    class="text-gray-600 hover:text-gray-900 font-medium"
                >
                    ← Back
                </button>
                <button
                    @click="placeOrder"
                    class="bg-secondary-500 text-white px-8 py-3 rounded-lg hover:bg-secondary-600 transition-colors font-semibold"
                >
                    Place Order
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const steps = ["Information", "Review", "Payment"];
const currentStep = ref(1);
const paymentMethod = ref("bkash");

const form = ref({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
});

const nextStep = () => {
    if (currentStep.value < 3) {
        currentStep.value++;
    }
};

const placeOrder = () => {
    // TODO: Submit order to backend
    const orderId =
        "ORD" + Math.random().toString(36).substr(2, 9).toUpperCase();
    if (paymentMethod.value === "bkash") {
        router.push("/payment-pending");
    } else {
        router.push(`/order-success/${orderId}`);
    }
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

.hover\:border-primary-500:hover {
    border-color: #3b82f6;
}
</style>
