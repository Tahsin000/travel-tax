// Mock data for the travel-tax application

export const events = [
  {
    id: 1,
    slug: 'cox-bazar-beach-adventure',
    title: "Cox's Bazar Beach Adventure",
    description: "Experience the world's longest natural sea beach with stunning sunsets and local cuisine.",
    fullDescription: "Join us for an unforgettable 3-day journey to Cox's Bazar, featuring beach activities, local seafood, and cultural experiences. This tour includes guided visits to Himchari National Park, Inani Beach, and the vibrant local markets.",
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    price: 12500,
    duration: '3 Days / 2 Nights',
    location: "Cox's Bazar, Bangladesh",
    maxGuests: 20,
    seats_left: 5,
    date: '2026-02-15',
    region: 'Coastal',
    budget: 'Mid-Range',
    packages: [
      { id: 'economy', name: 'Economy', price: 12500, description: 'Standard accommodation, group tours' },
      { id: 'premium', name: 'Premium', price: 18500, description: 'Deluxe rooms, private guide, premium meals' }
    ],
    included: ['Accommodation', 'Breakfast & Dinner', 'Transportation', 'Tour Guide'],
    itinerary: [
      { day: 1, title: 'Arrival & Beach Exploration', activities: 'Check-in, sunset at main beach, welcome dinner' },
      { day: 2, title: 'Adventure Day', activities: 'Himchari waterfall, Inani beach, local market tour' },
      { day: 3, title: 'Departure', activities: 'Morning beach walk, checkout, return journey' }
    ]
  },
  {
    id: 2,
    slug: 'sundarbans-mangrove-expedition',
    title: 'Sundarbans Mangrove Expedition',
    description: 'Explore the largest mangrove forest and spot Royal Bengal Tigers in their natural habitat.',
    fullDescription: 'A thrilling 4-day expedition through the UNESCO World Heritage Site. Navigate through narrow creeks, spot wildlife, and experience the unique ecosystem of the Sundarbans.',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800',
    price: 18000,
    duration: '4 Days / 3 Nights',
    location: 'Sundarbans, Bangladesh',
    maxGuests: 15,
    seats_left: 12,
    date: '2026-03-10',
    region: 'Forest',
    budget: 'Premium',
    packages: [
      { id: 'economy', name: 'Economy', price: 18000, description: 'Shared boat, standard meals' },
      { id: 'premium', name: 'Premium', price: 25000, description: 'Private boat, gourmet meals, expert guide' }
    ],
    included: ['Boat Accommodation', 'All Meals', 'Wildlife Guide', 'Permits'],
    itinerary: [
      { day: 1, title: 'Journey Begins', activities: 'Departure from Dhaka, boat boarding, evening cruise' },
      { day: 2, title: 'Wildlife Safari', activities: 'Morning safari, bird watching, creek exploration' },
      { day: 3, title: 'Deep Forest', activities: 'Karamjal wildlife center, fishing village visit' },
      { day: 4, title: 'Return Journey', activities: 'Morning safari, return to Dhaka' }
    ]
  },
  {
    id: 3,
    slug: 'sylhet-tea-garden-retreat',
    title: 'Sylhet Tea Garden Retreat',
    description: 'Immerse yourself in the lush green tea gardens and visit the stunning Ratargul Swamp Forest.',
    fullDescription: 'Discover the beauty of Sylhet with visits to pristine tea estates, Jaflong, and the unique Ratargul Swamp Forest. Perfect for nature lovers and photography enthusiasts.',
    image: 'https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=800',
    price: 15000,
    duration: '3 Days / 2 Nights',
    location: 'Sylhet, Bangladesh',
    maxGuests: 25,
    seats_left: 8,
    date: '2026-02-20',
    region: 'Hill',
    budget: 'Mid-Range',
    packages: [
      { id: 'economy', name: 'Economy', price: 15000, description: 'Hotel stay, group transport' },
      { id: 'premium', name: 'Premium', price: 21000, description: 'Resort stay, private car, photography guide' }
    ],
    included: ['Hotel Stay', 'Breakfast', 'Transportation', 'Entry Fees'],
    itinerary: [
      { day: 1, title: 'Tea Estate Tour', activities: 'Visit tea gardens, tea tasting, local cuisine' },
      { day: 2, title: 'Natural Wonders', activities: 'Ratargul boat ride, Jaflong stone collection, Lalakhal' },
      { day: 3, title: 'Cultural Experience', activities: 'Shrine visit, local market, return journey' }
    ]
  },
  {
    id: 4,
    slug: 'sajek-valley-mountain-escape',
    title: 'Sajek Valley Mountain Escape',
    description: 'Experience the clouds from above in the Queen of Hills with breathtaking mountain views.',
    fullDescription: 'A 2-day adventure to Sajek Valley, known for its stunning cloud-covered peaks and indigenous culture. Witness spectacular sunrises and explore local tribal villages.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    price: 9500,
    duration: '2 Days / 1 Night',
    location: 'Sajek Valley, Bangladesh',
    maxGuests: 18,
    seats_left: 3,
    date: '2026-02-25',
    region: 'Hill',
    budget: 'Budget',
    packages: [
      { id: 'economy', name: 'Economy', price: 9500, description: 'Cottage stay, shared transport' },
      { id: 'premium', name: 'Premium', price: 14500, description: 'Premium cottage, private jeep, bonfire' }
    ],
    included: ['Cottage Stay', 'Meals', '4x4 Transport', 'Bonfire'],
    itinerary: [
      { day: 1, title: 'Mountain Journey', activities: 'Scenic drive, check-in, sunset viewing, bonfire night' },
      { day: 2, title: 'Cloud Paradise', activities: 'Sunrise at Konglak, village tour, return journey' }
    ]
  },
  {
    id: 5,
    slug: 'bandarban-hill-tracts-adventure',
    title: 'Bandarban Hill Tracts Adventure',
    description: 'Trek through the highest peaks of Bangladesh and discover indigenous cultures.',
    fullDescription: 'An adventurous 5-day trek through Bandarban, visiting Nilgiri, Boga Lake, and traditional tribal villages. Perfect for adventure seekers and cultural enthusiasts.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
    price: 22000,
    duration: '5 Days / 4 Nights',
    location: 'Bandarban, Bangladesh',
    maxGuests: 12,
    seats_left: 15,
    date: '2026-03-05',
    region: 'Hill',
    budget: 'Premium',
    packages: [
      { id: 'economy', name: 'Economy', price: 22000, description: 'Camping & basic hotels' },
      { id: 'premium', name: 'Premium', price: 30000, description: 'Premium hotels, expert trekking guide' }
    ],
    included: ['Camping & Hotels', 'All Meals', 'Trekking Guide', 'Permits'],
    itinerary: [
      { day: 1, title: 'Arrival', activities: 'Nilgiri hills, golden temple, check-in' },
      { day: 2, title: 'Boga Lake Trek', activities: 'Trek to Boga Lake, camping' },
      { day: 3, title: 'Lake Exploration', activities: 'Morning at lake, tribal village visit' },
      { day: 4, title: 'Return Trek', activities: 'Trek back, Chimbuk peak visit' },
      { day: 5, title: 'Departure', activities: 'Buddha Dhatu Jadi, return to Dhaka' }
    ]
  },
  {
    id: 6,
    slug: 'saint-martin-island-getaway',
    title: "Saint Martin's Island Getaway",
    description: "Bangladesh's only coral island with crystal clear waters and pristine beaches.",
    fullDescription: 'Escape to the tropical paradise of Saint Martin Island. Enjoy snorkeling, beach activities, and fresh seafood while surrounded by turquoise waters.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    price: 16500,
    duration: '3 Days / 2 Nights',
    location: "Saint Martin's Island, Bangladesh",
    maxGuests: 20,
    seats_left: 7,
    date: '2026-03-15',
    region: 'Coastal',
    budget: 'Mid-Range',
    packages: [
      { id: 'economy', name: 'Economy', price: 16500, description: 'Beach resort, group activities' },
      { id: 'premium', name: 'Premium', price: 24500, description: 'Beachfront villa, private snorkeling guide' }
    ],
    included: ['Beach Resort', 'Meals', 'Ship Transfer', 'Snorkeling Gear'],
    itinerary: [
      { day: 1, title: 'Island Arrival', activities: 'Ship journey, check-in, beach exploration' },
      { day: 2, title: 'Water Activities', activities: 'Snorkeling, coral viewing, island tour' },
      { day: 3, title: 'Relaxation & Return', activities: 'Morning swim, return ship journey' }
    ]
  }
]

export const products = [
  {
    id: 1,
    slug: 'waterproof-hiking-backpack',
    name: 'Waterproof Hiking Backpack 40L',
    category: 'Backpacks',
    price: 3500,
    originalPrice: 4500,
    discount: 22,
    badge: 'Sale',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
    description: 'Durable waterproof backpack perfect for trekking and outdoor adventures.',
    fullDescription: 'This 40L waterproof hiking backpack features multiple compartments, padded shoulder straps, and a rain cover. Made with tear-resistant material and designed for comfort during long treks.',
    specifications: {
      capacity: '40 Liters',
      material: 'Ripstop Nylon',
      weight: '1.2 kg',
      waterproof: 'Yes',
      warranty: '2 Years'
    },
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Navy', hex: '#1E40AF' },
      { name: 'Forest Green', hex: '#166534' }
    ],
    sizes: ['S', 'M', 'L'],
    stock: 25,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    slug: 'camping-tent-4-person',
    name: 'Camping Tent (4 Person)',
    category: 'Camping',
    price: 8500,
    originalPrice: 8500,
    discount: 0,
    badge: null,
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800',
    description: 'Spacious 4-person tent with easy setup and weather protection.',
    fullDescription: 'Premium quality camping tent with double-layer construction for weather protection. Features mesh windows for ventilation, easy pole setup, and a waterproof rainfly.',
    specifications: {
      capacity: '4 Persons',
      dimensions: '210 x 210 x 130 cm',
      weight: '3.5 kg',
      waterproof: 'Yes (3000mm)',
      setup: 'Easy pole system'
    },
    colors: [
      { name: 'Orange', hex: '#F59E0B' },
      { name: 'Blue', hex: '#3B82F6' }
    ],
    sizes: ['One Size'],
    stock: 15,
    rating: 4.7,
    reviews: 89
  },
  {
    id: 3,
    slug: 'trekking-poles-pair',
    name: 'Adjustable Trekking Poles (Pair)',
    category: 'Trekking Gear',
    price: 2200,
    originalPrice: 2200,
    discount: 0,
    badge: 'New Arrival',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800',
    description: 'Lightweight aluminum trekking poles with anti-shock technology.',
    fullDescription: 'Adjustable trekking poles with comfortable cork grips, tungsten carbide tips, and anti-shock springs. Perfect for reducing strain on knees during hikes.',
    specifications: {
      material: 'Aluminum Alloy',
      adjustable: '65-135 cm',
      weight: '250g each',
      grip: 'Cork',
      tips: 'Tungsten Carbide'
    },
    colors: [
      { name: 'Silver', hex: '#9CA3AF' },
      { name: 'Black', hex: '#000000' }
    ],
    sizes: ['Adjustable'],
    stock: 40,
    rating: 4.3,
    reviews: 156
  },
  {
    id: 4,
    slug: 'sleeping-bag-winter',
    name: 'Winter Sleeping Bag -10°C',
    category: 'Camping',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1520095972714-909e91b038e5?w=800',
    description: 'Warm sleeping bag rated for temperatures down to -10°C.',
    fullDescription: 'High-quality mummy-style sleeping bag with hollow fiber insulation. Includes compression sack for easy packing and transport.',
    specifications: {
      temperature: 'Comfort -5°C, Extreme -10°C',
      insulation: 'Hollow Fiber',
      weight: '1.8 kg',
      size: '220 x 80 cm',
      includes: 'Compression Sack'
    },
    stock: 20,
    rating: 4.6,
    reviews: 94
  },
  {
    id: 5,
    slug: 'portable-camping-stove',
    name: 'Portable Gas Camping Stove',
    category: 'Cooking',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800',
    description: 'Compact and efficient camping stove with piezo ignition.',
    fullDescription: 'Lightweight portable stove with adjustable flame control and wind protection. Compatible with standard butane gas canisters.',
    specifications: {
      fuel: 'Butane Gas',
      power: '3000W',
      weight: '350g',
      ignition: 'Piezo',
      includes: 'Carrying Case'
    },
    stock: 35,
    rating: 4.4,
    reviews: 112
  },
  {
    id: 6,
    slug: 'headlamp-rechargeable',
    name: 'LED Rechargeable Headlamp',
    category: 'Lighting',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800',
    description: 'Bright LED headlamp with multiple modes and USB charging.',
    fullDescription: 'Powerful 1000 lumen headlamp with adjustable beam, multiple brightness modes, and waterproof design. USB rechargeable with long battery life.',
    specifications: {
      brightness: '1000 Lumens',
      battery: 'Rechargeable Li-ion',
      runtime: 'Up to 20 hours',
      waterproof: 'IPX6',
      modes: '5 lighting modes'
    },
    stock: 50,
    rating: 4.8,
    reviews: 203
  },
  {
    id: 7,
    slug: 'water-filter-bottle',
    name: 'Portable Water Filter Bottle',
    category: 'Hydration',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800',
    description: 'Filter bottle that removes 99.9% of bacteria and parasites.',
    fullDescription: 'Advanced filtration system in a convenient bottle format. Perfect for hiking and travel, ensuring safe drinking water from natural sources.',
    specifications: {
      capacity: '650ml',
      filtration: '0.1 micron',
      lifespan: '1000 liters',
      material: 'BPA-free plastic',
      weight: '180g'
    },
    stock: 30,
    rating: 4.5,
    reviews: 87
  },
  {
    id: 8,
    slug: 'quick-dry-travel-towel',
    name: 'Microfiber Quick-Dry Travel Towel',
    category: 'Accessories',
    price: 850,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800',
    description: 'Ultra-absorbent and fast-drying microfiber towel.',
    fullDescription: 'Compact and lightweight travel towel that dries 3x faster than cotton. Includes mesh carrying bag.',
    specifications: {
      size: '80 x 160 cm',
      material: 'Microfiber',
      weight: '200g',
      features: 'Quick-dry, Antibacterial',
      includes: 'Mesh Bag'
    },
    stock: 60,
    rating: 4.2,
    reviews: 145
  },
  {
    id: 9,
    slug: 'multi-tool-survival-kit',
    name: '15-in-1 Multi-Tool Survival Kit',
    category: 'Tools',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800',
    description: 'Compact multi-tool with 15 essential functions.',
    fullDescription: 'Stainless steel multi-tool featuring knife, pliers, screwdrivers, bottle opener, and more. Comes with leather sheath.',
    specifications: {
      functions: '15 Tools',
      material: 'Stainless Steel',
      weight: '220g',
      length: '10 cm (closed)',
      includes: 'Leather Sheath'
    },
    stock: 45,
    rating: 4.6,
    reviews: 178
  },
  {
    id: 10,
    slug: 'insulated-water-bottle',
    name: 'Insulated Stainless Steel Bottle 1L',
    category: 'Hydration',
    price: 1600,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800',
    description: 'Double-wall insulated bottle keeps drinks cold for 24h, hot for 12h.',
    fullDescription: 'Premium vacuum-insulated bottle with leak-proof lid. Keeps beverages at the perfect temperature for hours.',
    specifications: {
      capacity: '1 Liter',
      material: 'Stainless Steel 304',
      insulation: 'Double-wall Vacuum',
      cold: '24 hours',
      hot: '12 hours'
    },
    stock: 55,
    rating: 4.7,
    reviews: 267
  }
]

export const bookings = [
  {
    id: 'BK001',
    eventId: 1,
    eventName: "Cox's Bazar Beach Adventure",
    date: '2026-02-15',
    status: 'Confirmed',
    guests: 2,
    totalAmount: 25000,
    bookingDate: '2026-01-05'
  },
  {
    id: 'BK002',
    eventId: 3,
    eventName: 'Sylhet Tea Garden Retreat',
    date: '2026-03-10',
    status: 'Upcoming',
    guests: 4,
    totalAmount: 60000,
    bookingDate: '2026-01-06'
  },
  {
    id: 'BK003',
    eventId: 2,
    eventName: 'Sundarbans Mangrove Expedition',
    date: '2025-12-20',
    status: 'Completed',
    guests: 2,
    totalAmount: 36000,
    bookingDate: '2025-11-15'
  }
]

export const orders = [
  {
    id: 'ORD001',
    date: '2026-01-03',
    items: [
      { productId: 1, name: 'Waterproof Hiking Backpack 40L', quantity: 1, price: 3500 },
      { productId: 6, name: 'LED Rechargeable Headlamp', quantity: 2, price: 1500 }
    ],
    subtotal: 6500,
    tax: 650,
    total: 7150,
    status: 'Delivered',
    paymentMethod: 'bKash',
    paymentStatus: 'Verified'
  },
  {
    id: 'ORD002',
    date: '2026-01-05',
    items: [
      { productId: 2, name: 'Camping Tent (4 Person)', quantity: 1, price: 8500 },
      { productId: 4, name: 'Winter Sleeping Bag -10°C', quantity: 2, price: 4500 }
    ],
    subtotal: 17500,
    tax: 1750,
    total: 19250,
    status: 'Processing',
    paymentMethod: 'bKash',
    paymentStatus: 'Pending'
  },
  {
    id: 'ORD003',
    date: '2025-12-28',
    items: [
      { productId: 3, name: 'Adjustable Trekking Poles (Pair)', quantity: 1, price: 2200 }
    ],
    subtotal: 2200,
    tax: 220,
    total: 2420,
    status: 'Delivered',
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'Paid'
  }
]
