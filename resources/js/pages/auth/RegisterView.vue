<template>
    <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
            Create Account
        </h2>

        <form @submit.prevent="handleRegister" class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Full Name</label
                >
                <input
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="John Doe"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
            </div>

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

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Confirm Password</label
                >
                <input
                    v-model="form.confirmPassword"
                    type="password"
                    required
                    placeholder="••••••••"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
            </div>

            <div>
                <label class="flex items-start">
                    <input
                        v-model="form.acceptTerms"
                        type="checkbox"
                        required
                        class="mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span class="ml-2 text-sm text-gray-600">
                        I accept the
                        <a
                            href="#terms"
                            class="text-primary-600 hover:text-primary-700"
                            >Terms of Service</a
                        >
                        and
                        <a
                            href="#privacy"
                            class="text-primary-600 hover:text-primary-700"
                            >Privacy Policy</a
                        >
                    </span>
                </label>
            </div>

            <button
                type="submit"
                class="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
                Create Account
            </button>
        </form>

        <div class="mt-6 text-center">
            <p class="text-sm text-gray-600">
                Already have an account?
                <router-link
                    to="/login"
                    class="text-primary-600 hover:text-primary-700 font-medium"
                >
                    Sign in
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
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
});

const handleRegister = () => {
    if (form.value.password !== form.value.confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    // TODO: Integrate with auth store
    console.log("Register:", form.value);
    // Simulate successful registration
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
