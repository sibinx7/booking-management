export interface RateTier {
  id: string;
  duration: string; // e.g. '60 mins', '90 mins', '120 mins'
  price: number; // e.g. 130
  originalPrice?: number; // e.g. 160
  label: string; // e.g. 'Essential Reset', 'Signature Journey', 'Royal Sanctuary'
  popular?: boolean;
}

export interface ServiceOffer {
  id: string;
  badge: string; // e.g. 'Couples Privilege'
  title: string;
  discount: string; // e.g. '20% OFF'
  description: string;
  promoCode?: string;
}

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceReview {
  id: string;
  authorName: string;
  rating: number; // 1 to 5
  date: string;
  comment: string;
  treatmentDuration?: string;
  verifiedGuest: boolean;
}

export interface ServiceItem {
  slug: string;
  title: string;
  tagline: string;
  category: 'Couples & Romantic' | 'Exotic Massage' | 'Holistic Healing' | 'Hydrotherapy';
  heroImage: string;
  duration: string;
  basePrice: number;
  rating: number;
  reviewCount: number;
  overview: string;
  fullDescription: string;
  rates: RateTier[];
  offers: ServiceOffer[];
  features: ServiceFeature[];
  ritualSteps: string[];
  reviews: ServiceReview[];
}

export interface ReviewFormValues {
  authorName: string;
  rating: number;
  comment: string;
  treatmentDuration: string;
}

export interface BookingFormValues {
  guestName: string;
  email: string;
  phone: string;
  bookingDate: string;
  timeSlot: string;
  durationTier: string;
  guestsCount: number;
  specialRequests?: string;
}
