import type { ServiceItem } from '@/types/service';

export const servicesData: ServiceItem[] = [
  {
    slug: 'couples-retreat',
    title: 'Candlelit Couples Sanctuary Retreat',
    tagline: 'An intimate, sensory journey of shared serenity and relaxation',
    category: 'Couples & Romantic',
    heroImage: '/images/couples_retreat.jpg',
    duration: '120 mins',
    basePrice: 320,
    rating: 4.95,
    reviewCount: 48,
    overview:
      'Immerse in an intimate private wooden garden pavilion with side-by-side aromatherapy massages, warm botanical oils, and private hydrotherapy bath.',
    fullDescription:
      'Designed exclusively for couples seeking a tranquil sanctuary. Your journey begins with a sacred floral foot cleansing ritual, followed by a harmonized 90-minute full-body Balinese and Swedish massage with cold-pressed ylang-ylang and sandalwood oils. Conclude your retreat in a private candlelit rose petal bath accompanied by sparkling elixir and organic exotic fruits.',
    rates: [
      {
        id: 'tier-90',
        duration: '90 mins',
        price: 260,
        originalPrice: 295,
        label: 'Couples Serenity Ritual',
      },
      {
        id: 'tier-120',
        duration: '120 mins',
        price: 320,
        originalPrice: 370,
        label: 'Signature Sanctuary Journey',
        popular: true,
      },
      {
        id: 'tier-150',
        duration: '150 mins',
        price: 395,
        originalPrice: 450,
        label: 'Royal Emperor & Empress Experience',
      },
    ],
    offers: [
      {
        id: 'offer-couples-special',
        badge: 'Romance Privilege',
        title: 'Complimentary Petal Bath & Elixir',
        discount: 'Free $80 Value',
        description:
          'Book the 120-minute journey and receive a complimentary 30-minute flower petal immersion with artisanal herbal tea.',
        promoCode: 'ROMANCE20',
      },
      {
        id: 'offer-first-time',
        badge: 'New Member Gift',
        title: 'First-Time Sanctuary Discount',
        discount: '15% OFF',
        description: 'Save 15% on your first couples booking when reserving online.',
        promoCode: 'ANAHATA15',
      },
    ],
    features: [
      {
        icon: 'bi-gem',
        title: 'Private Garden Pavilion',
        description: 'Acoustically secluded suite with custom ambient warmth and forest views.',
      },
      {
        icon: 'bi-droplet',
        title: 'Hand-Blended Aromatics',
        description: 'Organic ylang-ylang, sandalwood, and sweet orange virgin coconut oils.',
      },
      {
        icon: 'bi-flower1',
        title: 'Fresh Botanical Petals',
        description: 'Thousands of freshly plucked rose, jasmine, and frangipani blossoms.',
      },
      {
        icon: 'bi-cup-hot',
        title: 'Herbal Infusions & Elixirs',
        description: 'Post-treatment signature ginger honey brew and organic dried mangoes.',
      },
    ],
    ritualSteps: [
      'Welcome Blessing & Floral Foot Washing Ceremony (15 mins)',
      'Side-by-Side Deep Tension Aromatherapy Massage (75 mins)',
      'Warm Volcanic Stone Back & Shoulder Therapy (15 mins)',
      'Intimate Candlelit Rose Petal Hydrotherapy Bath & Refreshments (30 mins)',
    ],
    reviews: [
      {
        id: 'rev-1',
        authorName: 'Marcus & Sophia Vance',
        rating: 5,
        date: '2 days ago',
        treatmentDuration: '120 mins',
        verifiedGuest: true,
        comment:
          'Absolute perfection for our anniversary. The candlelit pavilion felt like paradise in Bali. The therapists were masterfully in sync and the petal bath was unforgettable.',
      },
      {
        id: 'rev-2',
        authorName: 'David K.',
        rating: 5,
        date: '1 week ago',
        treatmentDuration: '120 mins',
        verifiedGuest: true,
        comment:
          'Truly exotic and relaxing. The atmosphere, music, and aromas transported us to complete bliss. We will definitely be back next month.',
      },
      {
        id: 'rev-3',
        authorName: 'Elena Rostova',
        rating: 5,
        date: '2 weeks ago',
        treatmentDuration: '90 mins',
        verifiedGuest: true,
        comment:
          'One of the best spa experiences of my life. Professional, respectful, and so deeply therapeutic.',
      },
    ],
  },
  {
    slug: 'volcanic-stone-ritual',
    title: 'Sensual Volcanic Oil & Stone Therapy',
    tagline: 'Deep thermal healing and sensory tension relief',
    category: 'Exotic Massage',
    heroImage: '/images/sensory_massage.jpg',
    duration: '90 mins',
    basePrice: 185,
    rating: 4.92,
    reviewCount: 62,
    overview:
      'Warm basalt volcanic stones combined with continuous warm herbal oil streams glide over muscular meridians to melt away deep fatigue.',
    fullDescription:
      'Harnessing the primal thermal energy of natural volcanic basalt stones, this ritual penetrates deep into muscle tissue. Hand-carved stones heated to the optimal soothing temperature are coated in organic warm sesame and cedarwood oil, releasing chronic knots, improving lymphatic circulation, and inducing a state of meditative tranquility.',
    rates: [
      {
        id: 'tier-stone-60',
        duration: '60 mins',
        price: 140,
        originalPrice: 160,
        label: 'Targeted Tension Relief',
      },
      {
        id: 'tier-stone-90',
        duration: '90 mins',
        price: 185,
        originalPrice: 210,
        label: 'Complete Thermal Harmony',
        popular: true,
      },
      {
        id: 'tier-stone-120',
        duration: '120 mins',
        price: 240,
        originalPrice: 275,
        label: 'Extended Body & Facial Stone Journey',
      },
    ],
    offers: [
      {
        id: 'offer-thermal-bonus',
        badge: 'Weekday Special',
        title: 'Complimentary Aroma Steam Sauna',
        discount: 'Free Access',
        description: 'Enjoy 20 minutes in our Eucalyptus Aroma Steam Suite prior to your massage.',
        promoCode: 'STEAMFREE',
      },
    ],
    features: [
      {
        icon: 'bi-droplet-half',
        title: 'Mineral-Rich Basalt Stones',
        description: 'Smooth volcanic stones holding prolonged restorative thermal warmth.',
      },
      {
        icon: 'bi-shield-check',
        title: 'Calibrated Temperature',
        description: 'Custom stone temperature tailored to your comfort and skin sensitivity.',
      },
      {
        icon: 'bi-stars',
        title: 'Chakra Balancing',
        description: 'Placement of crystal and basalt energy stones along core energy points.',
      },
      {
        icon: 'bi-wind',
        title: 'Aroma Diffusion',
        description: 'Continuous cold diffusion of cedarwood, vetiver, and sweet marjoram.',
      },
    ],
    ritualSteps: [
      'Warm Herbal Towel Compression & Meridian Activation (10 mins)',
      'Full-Body Warm Botanical Oil Gliding Massage (40 mins)',
      'Volcanic Hot Stone Deep Tissue & Pressure Point Therapy (30 mins)',
      'Chakra Realignment & Head Acupressure Release (10 mins)',
    ],
    reviews: [
      {
        id: 'rev-stone-1',
        authorName: 'Liam Patterson',
        rating: 5,
        date: '3 days ago',
        treatmentDuration: '90 mins',
        verifiedGuest: true,
        comment:
          'My chronic lower back tightness completely vanished. The warmth of the stones combined with the aromatic oil was heavenly.',
      },
      {
        id: 'rev-stone-2',
        authorName: 'Amara Chen',
        rating: 5,
        date: '1 week ago',
        treatmentDuration: '90 mins',
        verifiedGuest: true,
        comment:
          'Incredible technique. The transitions between hands and hot stones were seamless. Left floating on air.',
      },
    ],
  },
  {
    slug: 'floral-petal-bath',
    title: 'Exotic Floral Petal Bath & Elixir',
    tagline: 'Sensory hydrotherapy and botanical skin rejuvenation',
    category: 'Hydrotherapy',
    heroImage: '/images/herbal_bath.jpg',
    duration: '60 mins',
    basePrice: 140,
    rating: 4.88,
    reviewCount: 39,
    overview:
      'Immerse in a hand-carved natural river stone tub floating thousands of handpicked exotic blossoms and essential oils.',
    fullDescription:
      'A timeless hydrotherapeutic bathing ritual inspired by Balinese royalty. A warm mineral bath infused with Himalayan pink salts, coconut milk, and thousands of fresh rose, jasmine, and frangipani petals envelops your body. Enjoy fresh chilled coconut water and gentle sound bath acoustics.',
    rates: [
      {
        id: 'tier-bath-45',
        duration: '45 mins',
        price: 110,
        label: 'Solo Botanical Soak',
      },
      {
        id: 'tier-bath-60',
        duration: '60 mins',
        price: 140,
        originalPrice: 165,
        label: 'Couples Petal Bath & Elixir',
        popular: true,
      },
      {
        id: 'tier-bath-90',
        duration: '90 mins',
        price: 195,
        originalPrice: 230,
        label: 'Petal Bath + 30m Back & Neck Massage',
      },
    ],
    offers: [
      {
        id: 'offer-bath-addon',
        badge: 'Add-On Special',
        title: '50% Off When Added to Any 90m Massage',
        discount: '50% OFF',
        description: 'Pair this petal bath with any 90-minute massage for half price.',
        promoCode: 'PAIR50',
      },
    ],
    features: [
      {
        icon: 'bi-flower1',
        title: '3,000+ Fresh Petals',
        description: 'Locally grown organic roses, white frangipani, and night jasmine.',
      },
      {
        icon: 'bi-droplet',
        title: 'Coconut Milk & Salt Infusion',
        description: 'Deeply hydrating raw coconut nectar and 84-mineral Himalayan salts.',
      },
      {
        icon: 'bi-cup-straw',
        title: 'Chilled Coconut Elixir',
        description: 'Served in whole young coconuts with fresh mint and lime.',
      },
      {
        icon: 'bi-music-note-beamed',
        title: 'Tibetan Sound Frequency',
        description: 'Harmonic 432Hz ambient frequencies designed for mental stillness.',
      },
    ],
    ritualSteps: [
      'Aromatherapy Steam Preparation (10 mins)',
      'Botanical Petal Hydrotherapy Immersion (35 mins)',
      'Hydrating Organic Aloe & Jasmine Body Glaze (15 mins)',
    ],
    reviews: [
      {
        id: 'rev-bath-1',
        authorName: 'Seraphina M.',
        rating: 5,
        date: '4 days ago',
        treatmentDuration: '60 mins',
        verifiedGuest: true,
        comment:
          'Like stepping directly into an exotic fairytale. The water smells like paradise and my skin feels so velvety smooth.',
      },
    ],
  },
  {
    slug: 'royal-balinese-massage',
    title: 'Royal Balinese Herbal Massage',
    tagline: 'Traditional rhythmic acupressure and warm herbal poultices',
    category: 'Exotic Massage',
    heroImage: '/images/sensory_massage.jpg',
    duration: '90 mins',
    basePrice: 165,
    rating: 4.96,
    reviewCount: 84,
    overview:
      'Ancient holistic therapy blending rhythmic palming, acupressure, and warm herbal compresses to revitalize circulation.',
    fullDescription:
      'Passed down through centuries of Balinese healing masters, this therapy utilizes deep thumb pressure, long rhythmic strokes, and steamed herbal poultices packed with lemongrass, turmeric, and ginger. It restores energy balance, detoxifies muscle tissues, and relieves chronic fatigue.',
    rates: [
      {
        id: 'tier-bali-60',
        duration: '60 mins',
        price: 125,
        label: 'Classic Balinese',
      },
      {
        id: 'tier-bali-90',
        duration: '90 mins',
        price: 165,
        originalPrice: 190,
        label: 'Royal Poultice Signature',
        popular: true,
      },
      {
        id: 'tier-bali-120',
        duration: '120 mins',
        price: 220,
        originalPrice: 255,
        label: 'Balinese Royal Rejuvenation',
      },
    ],
    offers: [
      {
        id: 'offer-bali-herbal',
        badge: 'Sanctuary Perk',
        title: 'Take-Home Organic Herbal Poultice',
        discount: 'Complimentary Gift',
        description: 'Receive your steamed herbal compress kit to use at home.',
      },
    ],
    features: [
      {
        icon: 'bi-flower1',
        title: 'Authentic Poultices',
        description: 'Organic steamed herbs: lemongrass, galangal, kaffir lime, and turmeric.',
      },
      {
        icon: 'bi-hand-index-thumb',
        title: 'Deep Thumb & Palm Pressure',
        description: 'Targeted acupressure relieving persistent tension lines.',
      },
      {
        icon: 'bi-fire',
        title: 'Thermal Detoxification',
        description: 'Increases peripheral microcirculation and flushes lactic build-up.',
      },
      {
        icon: 'bi-heart-pulse',
        title: 'Meridian Rebalancing',
        description: 'Harmonizes vitality flow throughout key nervous pathways.',
      },
    ],
    ritualSteps: [
      'Balinese Foot Scrub & Cleansing (10 mins)',
      'Rhythmic Full-Body Acupressure (45 mins)',
      'Steamed Herbal Poultice Thermal Massage (25 mins)',
      'Head, Neck & Scalp Vitality Release (10 mins)',
    ],
    reviews: [
      {
        id: 'rev-bali-1',
        authorName: 'Jonathan Reed',
        rating: 5,
        date: 'Yesterday',
        treatmentDuration: '90 mins',
        verifiedGuest: true,
        comment:
          'Hands down the most authentic Balinese massage I have had outside of Ubud. The warm herbal poultices felt phenomenal.',
      },
    ],
  },
  {
    slug: 'ayurvedic-shirodhara',
    title: 'Ayurvedic Shirodhara & Abhyanga',
    tagline: 'Sacred third-eye oil pour for deep neurological calm',
    category: 'Holistic Healing',
    heroImage: '/images/couples_retreat.jpg',
    duration: '90 mins',
    basePrice: 180,
    rating: 4.93,
    reviewCount: 51,
    overview:
      'Continuous warm herbal oil stream over the third-eye chakra paired with synchronized full-body Abhyanga massage.',
    fullDescription:
      'An ancient Vedic therapeutic masterpiece. Shirodhara calms the autonomic nervous system by gently pouring warmed medicated oils over the forehead in a hypnotic, continuous stream. Combined with warm full-body Abhyanga strokes, it relieves anxiety, improves insomnia, and centers the spirit.',
    rates: [
      {
        id: 'tier-ayur-60',
        duration: '60 mins',
        price: 135,
        label: 'Pure Shirodhara Flow',
      },
      {
        id: 'tier-ayur-90',
        duration: '90 mins',
        price: 180,
        originalPrice: 205,
        label: 'Shirodhara + Abhyanga',
        popular: true,
      },
      {
        id: 'tier-ayur-120',
        duration: '120 mins',
        price: 235,
        originalPrice: 270,
        label: 'Full Ayurvedic Panchakarma Ritual',
      },
    ],
    offers: [
      {
        id: 'offer-ayur-member',
        badge: 'Holistic Pass',
        title: 'Includes Personalized Dosha Consultation',
        discount: 'Free $50 Value',
        description: 'Our certified Ayurvedic practitioner analyzes your Vata/Pitta/Kapha profile.',
      },
    ],
    features: [
      {
        icon: 'bi-brightness-high',
        title: 'Third-Eye Pour (Shirodhara)',
        description: 'Hypnotic rhythmic stream of warm Brahmi and Ashwagandha oil.',
      },
      {
        icon: 'bi-droplet',
        title: 'Medicated Herbal Oils',
        description: 'Traditional slow-cooked sesame oil with 16 organic Ayurvedic botanicals.',
      },
      {
        icon: 'bi-moon-stars',
        title: 'Deep Neurological Reset',
        description: 'Stimulates alpha brainwaves for profound mental relaxation.',
      },
      {
        icon: 'bi-shield-check',
        title: 'Scalp & Hair Conditioning',
        description: 'Nourishes follicles with organic Bhringraj oil.',
      },
    ],
    ritualSteps: [
      'Dosha Energy Assessment & Scalp Massage (15 mins)',
      'Full-Body Warm Abhyanga Oil Strokes (45 mins)',
      'Continuous Third-Eye Shirodhara Pour (25 mins)',
      'Warm Herbal Wrap & Quiet Integration (5 mins)',
    ],
    reviews: [
      {
        id: 'rev-ayur-1',
        authorName: 'Nadia Thorne',
        rating: 5,
        date: '5 days ago',
        treatmentDuration: '90 mins',
        verifiedGuest: true,
        comment:
          'I have never experienced such profound stillness. The oil stream on the forehead melted away weeks of stress. Magic.',
      },
    ],
  },
  {
    slug: 'botanical-aromatherapy',
    title: 'Botanical Aromatherapy Bliss',
    tagline: 'Custom sensory aromatherapy and stress dissolution',
    category: 'Exotic Massage',
    heroImage: '/images/herbal_bath.jpg',
    duration: '60 mins',
    basePrice: 130,
    rating: 4.9,
    reviewCount: 73,
    overview:
      'Custom-blended cold-pressed essential oils formulated specifically for your current energy and stress relief needs.',
    fullDescription:
      'Select your personal aromatic path: Deep Relaxation (Lavender & Vetiver), Energizing Vitality (Sweet Bergamot & Lemongrass), or Emotional Clarity (Frankincense & Rose). Long, flowing Swedish strokes combine with gentle lymph drainage to soothe the nervous system.',
    rates: [
      {
        id: 'tier-aroma-60',
        duration: '60 mins',
        price: 130,
        label: 'Essential Aromatherapy',
        popular: true,
      },
      {
        id: 'tier-aroma-90',
        duration: '90 mins',
        price: 170,
        originalPrice: 195,
        label: 'Complete Sensory Immersion',
      },
      {
        id: 'tier-aroma-120',
        duration: '120 mins',
        price: 215,
        originalPrice: 245,
        label: 'Aromatherapy + Scalp & Face Reflexology',
      },
    ],
    offers: [
      {
        id: 'offer-aroma-bottle',
        badge: 'Sanctuary Gift',
        title: 'Complimentary 10ml Essential Oil Blend',
        discount: 'Free Gift',
        description: 'Take home the exact botanical blend used during your massage.',
      },
    ],
    features: [
      {
        icon: 'bi-stars',
        title: 'Bespoke Scent Formulation',
        description: 'Choose your personalized mood blend prior to starting.',
      },
      {
        icon: 'bi-droplet',
        title: '100% Pure Therapeutic Grade',
        description: 'Steam-distilled botanicals without fillers or synthetic fixatives.',
      },
      {
        icon: 'bi-wind',
        title: 'Gentle Lymph Drainage',
        description: 'Subtle light rhythmic pressure to relieve fluid retention.',
      },
      {
        icon: 'bi-cup-hot',
        title: 'Warm Chamomile Finish',
        description: 'Calming chamomile blossom tea post-session.',
      },
    ],
    ritualSteps: [
      'Aroma Sensory Inhalation & Breathing Guide (10 mins)',
      'Flowing Lymphatic & Swedish Massage (40 mins)',
      'Aromatic Scalp & Ear Reflexology (10 mins)',
    ],
    reviews: [
      {
        id: 'rev-aroma-1',
        authorName: 'Claire Bennett',
        rating: 5,
        date: '1 week ago',
        treatmentDuration: '60 mins',
        verifiedGuest: true,
        comment:
          'The custom scent formulation made such a difference. I left feeling completely grounded and refreshed.',
      },
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return servicesData.find((s) => s.slug === slug);
};
