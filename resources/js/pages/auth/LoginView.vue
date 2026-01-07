<template>
    <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
            Welcome Back
        </h2>

        <form @submit.prevent="handleLogin" class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Email</label
                >
                <input
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Password</label
                >
                <input
                    v-model="form.password"
                    type="password"
                    required
                    placeholder="••••••••"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
            </div>

            <div class="flex items-center justify-between">
                <label class="flex items-center">
                    <input
                        v-model="form.remember"
                        type="checkbox"
                        class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span class="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <router-link
                    to="/forgot-password"
                    class="text-sm text-primary-600 hover:text-primary-700"
                >
                    Forgot password?
                </router-link>
            </div>

            <button
                type="submit"
                class="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
                Sign In
            </button>
        </form>

        <div class="mt-6 text-center">
            <p class="text-sm text-gray-600">
                Don't have an account?
                <router-link
                    to="/register"
                    class="text-primary-600 hover:text-primary-700 font-medium"
                >
                    Sign up
                </router-link>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref({
    email: "",
    password: "",
    remember: false,
});

const handleLogin = () => {
    // TODO: Integrate with auth store
    console.log("Login:", form.value);
    // Simulate successful login
    router.push("/profile/dashboard");
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
