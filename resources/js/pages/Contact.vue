<template>
    <div
        class="min-h-screen bg-gradient-to-br from-cream-50 via-white to-royal-50"
    >
        <!-- Hero Section -->
        <div class="relative bg-gradient-royal text-white py-20">
            <div class="absolute inset-0 opacity-10">
                <div
                    class="absolute inset-0"
                    style="
                        background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80');
                        background-size: cover;
                        background-position: center;
                    "
                ></div>
            </div>
            <div
                class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
                <h1
                    class="text-5xl md:text-6xl font-display font-bold mb-4 animate-fade-in"
                >
                    Get in Touch
                </h1>
                <p class="text-xl text-cream-100 max-w-2xl mx-auto">
                    We'd love to hear from you. Let's create your perfect
                    journey together.
                </p>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div class="bg-white rounded-2xl shadow-luxury p-8 lg:p-10">
                    <h2
                        class="text-3xl font-display font-bold text-royal-900 mb-6"
                    >
                        Send us a Message
                    </h2>
                    <form @submit.prevent="submitForm" class="space-y-6">
                        <div>
                            <label
                                class="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Your Name *
                            </label>
                            <input
                                v-model="form.name"
                                type="text"
                                required
                                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-royal-500 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label
                                class="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Email Address *
                            </label>
                            <input
                                v-model="form.email"
                                type="email"
                                required
                                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-royal-500 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label
                                class="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Phone Number
                            </label>
                            <input
                                v-model="form.phone"
                                type="tel"
                                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-royal-500 transition-colors"
                                placeholder="+880 1XXX-XXXXXX"
                            />
                        </div>

                        <div>
                            <label
                                class="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Subject *
                            </label>
                            <select
                                v-model="form.subject"
                                required
                                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-royal-500 transition-colors"
                            >
                                <option value="">Select a subject</option>
                                <option value="tour-inquiry">
                                    Tour Inquiry
                                </option>
                                <option value="booking">
                                    Booking Assistance
                                </option>
                                <option value="product">
                                    Product Question
                                </option>
                                <option value="feedback">Feedback</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label
                                class="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Message *
                            </label>
                            <textarea
                                v-model="form.message"
                                required
                                rows="5"
                                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-royal-500 transition-colors resize-none"
                                placeholder="Tell us how we can help you..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            class="w-full bg-gradient-royal text-white py-4 rounded-lg font-semibold text-lg hover:shadow-luxury-lg transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <!-- Contact Information -->
                <div class="space-y-8">
                    <!-- Contact Cards -->
                    <div class="bg-white rounded-2xl shadow-luxury p-8">
                        <h3
                            class="text-2xl font-display font-bold text-royal-900 mb-6"
                        >
                            Contact Information
                        </h3>
                        <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                                <div
                                    class="flex-shrink-0 w-12 h-12 bg-gradient-royal rounded-lg flex items-center justify-center"
                                >
                                    <MapPin class="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h4
                                        class="font-semibold text-gray-900 mb-1"
                                    >
                                        Office Address
                                    </h4>
                                    <p class="text-gray-600">
                                        123 Travel Street, Gulshan<br />
                                        Dhaka 1212, Bangladesh
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4">
                                <div
                                    class="flex-shrink-0 w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center"
                                >
                                    <Phone class="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h4
                                        class="font-semibold text-gray-900 mb-1"
                                    >
                                        Phone
                                    </h4>
                                    <p class="text-gray-600">
                                        +880 1712-345678<br />
                                        +880 2-9876543
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4">
                                <div
                                    class="flex-shrink-0 w-12 h-12 bg-gradient-royal rounded-lg flex items-center justify-center"
                                >
                                    <Mail class="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h4
                                        class="font-semibold text-gray-900 mb-1"
                                    >
                                        Email
                                    </h4>
                                    <p class="text-gray-600">
                                        info@traveltax.com<br />
                                        support@traveltax.com
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4">
                                <div
                                    class="flex-shrink-0 w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center"
                                >
                                    <Clock class="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h4
                                        class="font-semibold text-gray-900 mb-1"
                                    >
                                        Business Hours
                                    </h4>
                                    <p class="text-gray-600">
                                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                                        Saturday: 10:00 AM - 4:00 PM<br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Social Media -->
                    <div
                        class="bg-gradient-royal rounded-2xl shadow-luxury p-8 text-white"
                    >
                        <h3 class="text-2xl font-display font-bold mb-4">
                            Follow Us
                        </h3>
                        <p class="text-cream-100 mb-6">
                            Stay connected for the latest travel inspiration and
                            exclusive offers.
                        </p>
                        <div class="flex space-x-4">
                            <a
                                href="#facebook"
                                class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
                            >
                                <Facebook class="h-6 w-6" />
                            </a>
                            <a
                                href="#instagram"
                                class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
                            >
                                <Instagram class="h-6 w-6" />
                            </a>
                            <a
                                href="#twitter"
                                class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
                            >
                                <Twitter class="h-6 w-6" />
                            </a>
                            <a
                                href="#youtube"
                                class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
                            >
                                <Youtube class="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    Clock,
    Facebook,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Twitter,
    Youtube,
} from "lucide-vue-next";
import { ref } from "vue";

const form = ref({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
});

const submitForm = () => {
    // TODO: Implement form submission
    alert("Thank you for your message! We will get back to you soon.");
    // Reset form
    form.value = {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    };
};
</script>

<style scoped>
/* Gradient classes */
.bg-gradient-royal {
    background: linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%);
}

.bg-gradient-gold {
    background: linear-gradient(135deg, #d4af37 0%, #c19b2f 100%);
}
</style>
