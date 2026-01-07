import { useHead } from '@vueuse/head';

/**
 * SEO Composable for managing meta tags, Open Graph, and structured data
 * @param {Object} options - SEO configuration options
 * @param {string} options.title - Page title
 * @param {string} options.description - Meta description
 * @param {string} options.keywords - Meta keywords (optional)
 * @param {string} options.image - OG image URL (optional)
 * @param {string} options.url - Canonical URL (optional)
 * @param {string} options.type - OG type (website, article, product, etc.)
 * @param {Object} options.structuredData - JSON-LD structured data (optional)
 */
export function useSEO(options = {}) {
    const {
        title = 'TravelTax - Discover Bangladesh\'s Hidden Treasures',
        description = 'Explore Bangladesh with TravelTax. Curated luxury tours, premium travel gear, and unforgettable adventures.',
        keywords = 'travel bangladesh, tours, adventure, trekking, camping, travel gear',
        image = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop',
        url = typeof window !== 'undefined' ? window.location.href : '',
        type = 'website',
        structuredData = null,
    } = options;

    const siteName = 'TravelTax';
    const twitterHandle = '@traveltax';

    // Build meta tags
    const meta = [
        // Basic meta tags
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        
        // Open Graph
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: type },
        { property: 'og:url', content: url },
        { property: 'og:image', content: image },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: siteName },
        { property: 'og:locale', content: 'en_US' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: twitterHandle },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
        
        // Additional SEO
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'TravelTax' },
        { name: 'theme-color', content: '#4a148c' }, // Royal purple
    ];

    // Build link tags
    const link = [
        { rel: 'canonical', href: url },
    ];

    // Build script tags for structured data
    const script = [];
    if (structuredData) {
        script.push({
            type: 'application/ld+json',
            children: JSON.stringify(structuredData),
        });
    }

    // Apply head configuration
    useHead({
        title,
        meta,
        link,
        script,
    });

    return {
        title,
        description,
        image,
        url,
    };
}

/**
 * Generate Organization structured data
 */
export function getOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'TravelTax',
        url: 'https://traveltax.com',
        logo: 'https://traveltax.com/logo.png',
        description: 'Premium travel tours and gear in Bangladesh',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Travel Street, Gulshan',
            addressLocality: 'Dhaka',
            postalCode: '1212',
            addressCountry: 'BD',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+880-1712-345678',
            contactType: 'Customer Service',
            availableLanguage: ['English', 'Bengali'],
        },
        sameAs: [
            'https://facebook.com/traveltax',
            'https://instagram.com/traveltax',
            'https://twitter.com/traveltax',
        ],
    };
}

/**
 * Generate Event structured data
 */
export function getEventSchema(event) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: event.title,
        description: event.fullDescription || event.description,
        image: event.image,
        startDate: event.date,
        endDate: event.endDate || event.date,
        location: {
            '@type': 'Place',
            name: event.location,
            address: {
                '@type': 'PostalAddress',
                addressLocality: event.location,
                addressCountry: 'BD',
            },
        },
        offers: {
            '@type': 'Offer',
            price: event.price,
            priceCurrency: 'BDT',
            availability: event.seats_left > 0 ? 'https://schema.org/InStock' : 'https://schema.org/SoldOut',
            url: `https://traveltax.com/events/${event.slug}`,
            validFrom: new Date().toISOString(),
        },
        performer: {
            '@type': 'Organization',
            name: 'TravelTax',
        },
        organizer: {
            '@type': 'Organization',
            name: 'TravelTax',
            url: 'https://traveltax.com',
        },
    };
}

/**
 * Generate Product structured data
 */
export function getProductSchema(product) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.fullDescription || product.description,
        image: product.image,
        brand: {
            '@type': 'Brand',
            name: product.brand || 'TravelTax',
        },
        offers: {
            '@type': 'Offer',
            price: product.price,
            priceCurrency: 'BDT',
            availability: product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
            url: `https://traveltax.com/shop/${product.slug}`,
            seller: {
                '@type': 'Organization',
                name: 'TravelTax',
            },
        },
        aggregateRating: product.rating ? {
            '@type': 'AggregateRating',
            ratingValue: product.rating,
            reviewCount: product.reviews || 0,
            bestRating: 5,
            worstRating: 1,
        } : undefined,
        sku: product.id,
        category: product.category,
    };
}

/**
 * Generate Breadcrumb structured data
 */
export function getBreadcrumbSchema(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}
