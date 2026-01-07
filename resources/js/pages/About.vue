<template>
    <div
        class="min-h-screen bg-gradient-to-br from-cream-50 via-white to-royal-50"
    >
        <!-- Hero Section -->
        <div
            class="relative bg-gradient-royal text-white py-24 overflow-hidden"
        >
            <div class="absolute inset-0 opacity-10">
                <div
                    class="absolute inset-0"
                    style="
                        background-image: url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80');
                        background-size: cover;
                        background-position: center;
                    "
                ></div>
            </div>
            <div
                class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
                <h1
                    class="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in"
                >
                    Crafting Extraordinary Journeys
                </h1>
                <p class="text-xl md:text-2xl text-cream-100 max-w-3xl mx-auto">
                    Discover Bangladesh's hidden treasures with a touch of
                    luxury and elegance
                </p>
            </div>
        </div>

        <!-- Our Story -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-6 animate-slide-up">
                    <h2
                        class="text-4xl md:text-5xl font-display font-bold text-royal-900"
                    >
                        Our Story
                    </h2>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        Founded with a passion for showcasing Bangladesh's
                        breathtaking beauty, TravelTax has been curating premium
                        travel experiences since 2020. We believe that every
                        journey should be an unforgettable adventure filled with
                        wonder, comfort, and authentic cultural connections.
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        From the misty hills of Bandarban to the serene beaches
                        of Cox's Bazar, we've helped thousands of travelers
                        discover the magic that lies within our beautiful
                        country. Our commitment to excellence and attention to
                        detail ensures that every moment of your journey is
                        nothing short of extraordinary.
                    </p>
                    <div class="flex items-center space-x-8 pt-4">
                        <div>
                            <div class="text-4xl font-bold text-gold-500">
                                5000+
                            </div>
                            <div class="text-gray-600">Happy Travelers</div>
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-gold-500">
                                150+
                            </div>
                            <div class="text-gray-600">Destinations</div>
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-gold-500">
                                98%
                            </div>
                            <div class="text-gray-600">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <img
                        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
                        alt="Travel Adventure"
                        class="rounded-2xl shadow-luxury-lg w-full h-[500px] object-cover"
                    />
                    <div
                        class="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-gold rounded-2xl opacity-20 blur-2xl"
                    ></div>
                </div>
            </div>
        </div>

        <!-- Mission & Values -->
        <div class="bg-white py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2
                        class="text-4xl md:text-5xl font-display font-bold text-royal-900 mb-4"
                    >
                        Our Mission & Values
                    </h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        Guided by principles that define who we are and how we
                        serve you
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div
                        class="bg-gradient-to-br from-royal-50 to-white rounded-2xl p-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 transform hover:scale-105"
                    >
                        <div
                            class="w-16 h-16 bg-gradient-royal rounded-xl flex items-center justify-center mb-6"
                        >
                            <Compass class="h-8 w-8 text-white" />
                        </div>
                        <h3
                            class="text-2xl font-display font-bold text-royal-900 mb-4"
                        >
                            Authentic Experiences
                        </h3>
                        <p class="text-gray-700">
                            We create genuine connections between travelers and
                            local cultures, ensuring every journey is rich with
                            authentic moments and meaningful interactions.
                        </p>
                    </div>

                    <div
                        class="bg-gradient-to-br from-gold-50 to-white rounded-2xl p-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 transform hover:scale-105"
                    >
                        <div
                            class="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-6"
                        >
                            <Award class="h-8 w-8 text-white" />
                        </div>
                        <h3
                            class="text-2xl font-display font-bold text-royal-900 mb-4"
                        >
                            Premium Quality
                        </h3>
                        <p class="text-gray-700">
                            From handpicked accommodations to expert guides, we
                            maintain the highest standards in every aspect of
                            your travel experience.
                        </p>
                    </div>

                    <div
                        class="bg-gradient-to-br from-rosegold-50 to-white rounded-2xl p-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 transform hover:scale-105"
                    >
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-rosegold-400 to-rosegold-600 rounded-xl flex items-center justify-center mb-6"
                        >
                            <Heart class="h-8 w-8 text-white" />
                        </div>
                        <h3
                            class="text-2xl font-display font-bold text-royal-900 mb-4"
                        >
                            Sustainable Tourism
                        </h3>
                        <p class="text-gray-700">
                            We're committed to responsible travel that preserves
                            natural beauty and supports local communities for
                            generations to come.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Why Choose Us -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div class="text-center mb-16">
                <h2
                    class="text-4xl md:text-5xl font-display font-bold text-royal-900 mb-4"
                >
                    Why Choose TravelTax
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Experience the difference that sets us apart
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                    class="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-luxury transition-all"
                >
                    <div
                        class="flex-shrink-0 w-12 h-12 bg-gradient-royal rounded-lg flex items-center justify-center"
                    >
                        <Shield class="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-royal-900 mb-2">
                            Safe & Secure
                        </h3>
                        <p class="text-gray-600">
                            Your safety is our priority. All tours are fully
                            insured with experienced guides and verified
                            partners.
                        </p>
                    </div>
                </div>

                <div
                    class="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-luxury transition-all"
                >
                    <div
                        class="flex-shrink-0 w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center"
                    >
                        <Users class="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-royal-900 mb-2">
                            Expert Guides
                        </h3>
                        <p class="text-gray-600">
                            Our passionate local guides bring destinations to
                            life with their knowledge and storytelling.
                        </p>
                    </div>
                </div>

                <div
                    class="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-luxury transition-all"
                >
                    <div
                        class="flex-shrink-0 w-12 h-12 bg-gradient-royal rounded-lg flex items-center justify-center"
                    >
                        <Star class="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-royal-900 mb-2">
                            Personalized Service
                        </h3>
                        <p class="text-gray-600">
                            We tailor each experience to your preferences,
                            ensuring your journey is uniquely yours.
                        </p>
                    </div>
                </div>

                <div
                    class="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-luxury transition-all"
                >
                    <div
                        class="flex-shrink-0 w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center"
                    >
                        <Clock class="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-royal-900 mb-2">
                            24/7 Support
                        </h3>
                        <p class="text-gray-600">
                            Our dedicated team is always available to assist you
                            before, during, and after your trip.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA Section -->
        <div class="bg-gradient-royal text-white py-20">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">
                    Ready to Start Your Adventure?
                </h2>
                <p class="text-xl text-cream-100 mb-8">
                    Let us create an unforgettable journey tailored just for you
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <router-link
                        to="/events"
                        class="inline-block bg-gold-500 text-white px-10 py-4 rounded-lg hover:bg-gold-600 transition-all hover:scale-105 font-semibold text-lg shadow-gold"
                    >
                        Explore Tours
                    </router-link>
                    <router-link
                        to="/contact"
                        class="inline-block bg-white/20 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-royal-900 transition-all font-semibold text-lg"
                    >
                        Contact Us
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Award, Heart, Shield, Users } from "lucide-vue-next";
import { getOrganizationSchema, useSEO } from "../composables/useSEO";

// SEO Configuration
useSEO({
    title: "About TravelTax - Your Premium Travel Partner in Bangladesh",
    description:
        "Learn about TravelTax's mission to showcase Bangladesh's beauty through curated luxury experiences. 5000+ happy travelers, 150+ destinations, 98% satisfaction rate.",
    keywords:
        "about traveltax, travel company bangladesh, luxury tours, travel agency, adventure tours bangladesh",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=630&fit=crop",
    type: "website",
    structuredData: {
        "@context": "https://schema.org",
        "@graph": [
            getOrganizationSchema(),
            {
                "@type": "AboutPage",
                name: "About TravelTax",
                description:
                    "Learn about TravelTax, Bangladesh's premier travel and adventure company",
                url: "https://traveltax.com/about",
            },
        ],
    },
});
</script>

<style scoped>
.bg-gradient-royal {
    background: linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%);
}

.bg-gradient-gold {
    background: linear-gradient(135deg, #d4af37 0%, #c19b2f 100%);
}

.shadow-luxury {
    box-shadow: 0 10px 40px rgba(74, 20, 140, 0.2);
}

.shadow-luxury-lg {
    box-shadow: 0 20px 60px rgba(74, 20, 140, 0.3);
}

.shadow-gold {
    box-shadow: 0 10px 40px rgba(212, 175, 55, 0.2);
}

.animate-fade-in {
    animation: fadeIn 0.6s ease-out;
}

.animate-slide-up {
    animation: slideUp 0.5s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        transform: translateY(100px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
