<template>
    <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-2 text-center">
            Forgot Password?
        </h2>
        <p class="text-sm text-gray-600 mb-6 text-center">
            Enter your email and we'll send you a reset link
        </p>

        <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Email</label
                >
                <input
                    v-model="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
            </div>

            <button
                type="submit"
                class="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
                Send Reset Link
            </button>
        </form>

        <div class="mt-6 text-center">
            <router-link
                to="/login"
                class="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
                ← Back to login
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");

const handleSubmit = () => {
    // TODO: Integrate with backend
    console.log("Password reset for:", email.value);
    alert("Password reset link sent to your email!");
    router.push("/login");
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

.text-primary-700 {
    color: #1d4ed8;
}

.focus\:ring-primary-500:focus {
    --tw-ring-color: #1e40af;
}

.hover\:bg-primary-700:hover {
    background-color: #1d4ed8;
}

.hover\:text-primary-700:hover {
    color: #1d4ed8;
}
</style>
