'use client';

import React, { useState } from 'react';
import SpaNavbar from '@/components/layout/SpaNavbar';
import ServiceBanner from '@/components/services/ServiceBanner';
import RatesAndOffers from '@/components/services/RatesAndOffers';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceReviews from '@/components/services/ServiceReviews';
import BookingModal from '@/components/services/BookingModal';
import type { ServiceItem, RateTier } from '@/types/service';
import Link from 'next/link';

interface ServiceDetailClientProps {
  service: ServiceItem;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [selectedTier, setSelectedTier] = useState<RateTier>(
    service.rates.find((r) => r.popular) || service.rates[0]
  );
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="spa-ambient-bg min-vh-100 d-flex flex-column">
      <SpaNavbar />

      {/* Hero Banner */}
      <ServiceBanner
        service={service}
        selectedPrice={selectedTier.price}
        selectedDuration={selectedTier.duration}
        onBookClick={() => setIsBookingOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Left Main Content */}
            <div className="col-12 col-lg-8">
              {/* Rates & Special Offers */}
              <RatesAndOffers
                rates={service.rates}
                offers={service.offers}
                selectedTier={selectedTier}
                onSelectTier={setSelectedTier}
                onBookClick={() => setIsBookingOpen(true)}
                serviceTitle={service.title}
              />

              {/* Ritual Features & Step Sequence */}
              <ServiceFeatures
                overview={service.overview}
                fullDescription={service.fullDescription}
                features={service.features}
                ritualSteps={service.ritualSteps}
              />

              {/* Verified Guest Reviews & Post a Review Form */}
              <ServiceReviews
                initialReviews={service.reviews}
                rating={service.rating}
                reviewCount={service.reviewCount}
                serviceTitle={service.title}
              />
            </div>

            {/* Right Sticky Booking & Concierge Sidebar */}
            <div className="col-12 col-lg-4">
              <div className="position-sticky" style={{ top: '90px' }}>
                <div className="card spa-glass-card p-4 mb-4">
                  <span
                    className="small text-uppercase fw-semibold mb-1 d-block"
                    style={{ color: '#c5a880', letterSpacing: '1px' }}
                  >
                    Quick Booking
                  </span>
                  <h3 className="h5 fw-bold mb-3" style={{ color: '#142620' }}>
                    {service.title}
                  </h3>

                  <div className="p-3 bg-light rounded-3 mb-3 border">
                    <div className="d-flex justify-content-between mb-1">
                      <span className="small text-muted">Tier Selected:</span>
                      <strong className="small">{selectedTier.label}</strong>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                      <span className="small text-muted">Duration:</span>
                      <strong className="small">{selectedTier.duration}</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="small text-muted">Investment:</span>
                      <strong className="h6 text-warning mb-0">${selectedTier.price}</strong>
                    </div>
                  </div>

                  <div className="d-grid gap-2 mb-3">
                    <button
                      type="button"
                      className="btn btn-spa-book-glow py-3 fw-bold"
                      onClick={() => setIsBookingOpen(true)}
                    >
                      <i className="bi bi-calendar2-check me-2"></i>
                      Book Session Now
                    </button>

                    <a
                      href={`https://wa.me/1234567890?text=${encodeURIComponent(
                        `Hello Anahata Spa, I would like to inquire about booking the "${service.title}" (${selectedTier.duration} for $${selectedTier.price}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success py-2 d-flex align-items-center justify-content-center fw-semibold"
                      style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
                    >
                      <i className="bi bi-whatsapp me-2"></i>
                      Instant WhatsApp Chat
                    </a>
                  </div>

                  <div className="text-center text-muted" style={{ fontSize: '0.78rem' }}>
                    <i className="bi bi-shield-check text-success me-1"></i>
                    Free cancellation up to 4 hours before session
                  </div>
                </div>

                {/* Need Help Concierge Card */}
                <div className="card p-4 rounded-4 bg-white border shadow-sm">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center text-white"
                      style={{ width: '40px', height: '40px', backgroundColor: '#142620' }}
                    >
                      <i className="bi bi-telephone fs-5"></i>
                    </div>
                    <div>
                      <div className="fw-bold small" style={{ color: '#142620' }}>
                        Spa Concierge Desk
                      </div>
                      <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                        Daily 9:00 AM – 10:00 PM
                      </div>
                    </div>
                  </div>
                  <p className="text-muted small mb-0">
                    Have questions about custom couples arrangements or aromatics? Contact our concierge team anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Booking Formik Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        serviceTitle={service.title}
        selectedTier={selectedTier}
      />

      {/* Footer */}
      <footer className="bg-white border-top py-4 text-muted small mt-auto">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
            <div>
              &copy; {new Date().getFullYear()} Anahata Exotic Spa & Sanctuary. All rights reserved.
            </div>
            <div className="d-flex gap-3">
              <Link href="#privacy" className="text-muted text-decoration-none">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-muted text-decoration-none">
                Wellness Terms
              </Link>
              <Link href="#contact" className="text-muted text-decoration-none">
                Contact Concierge
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
