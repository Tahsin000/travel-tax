<template>
    <div>
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Account Settings</h1>

        <div class="bg-white rounded-lg shadow-md p-8">
            <form @submit.prevent="saveSettings" class="space-y-6">
                <!-- Profile Information -->
                <div>
                    <h2 class="text-xl font-semibold text-gray-900 mb-4">
                        Profile Information
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                class="block text-sm font-medium text-gray-700 mb-2"
                                >First Name</label
                            >
                            <input
                                v-model="form.firstName"
                                type="text"
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
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                    </div>
                    <div class="mt-4">
                        <label
                            class="block text-sm font-medium text-gray-700 mb-2"
                            >Email</label
                        >
                        <input
                            v-model="form.email"
                            type="email"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>
                    <div class="mt-4">
                        <label
                            class="block text-sm font-medium text-gray-700 mb-2"
                            >Phone</label
                        >
                        <input
                            v-model="form.phone"
                            type="tel"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>
                </div>

                <!-- Change Password -->
                <div class="pt-6 border-t border-gray-200">
                    <h2 class="text-xl font-semibold text-gray-900 mb-4">
                        Change Password
                    </h2>
                    <div class="space-y-4">
                        <div>
                            <label
                                class="block text-sm font-medium text-gray-700 mb-2"
                                >Current Password</label
                            >
                            <input
                                v-model="form.currentPassword"
                                type="password"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div>
                            <label
                                class="block text-sm font-medium text-gray-700 mb-2"
                                >New Password</label
                            >
                            <input
                                v-model="form.newPassword"
                                type="password"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div>
                            <label
                                class="block text-sm font-medium text-gray-700 mb-2"
                                >Confirm New Password</label
                            >
                            <input
                                v-model="form.confirmPassword"
                                type="password"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                    </div>
                </div>

                <!-- Save Button -->
                <div class="pt-6 flex justify-end">
                    <button
                        type="submit"
                        class="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "01712-345678",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
});

const saveSettings = () => {
    // TODO: Integrate with backend
    console.log("Save settings:", form.value);
    alert("Settings saved successfully!");
};
</script>

<style scoped>
.bg-primary-600 {
    background-color: #1e40af;
}

.bg-primary-700 {
    background-color: #1d4ed8;
}

.focus\:ring-primary-500:focus {
    --tw-ring-color: #1e40af;
}

.hover\:bg-primary-700:hover {
    background-color: #1d4ed8;
}
</style>
