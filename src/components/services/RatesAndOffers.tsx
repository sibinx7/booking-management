'use client';

import React from 'react';
import type { RateTier, ServiceOffer } from '@/types/service';

interface RatesAndOffersProps {
  rates: RateTier[];
  offers: ServiceOffer[];
  selectedTier: RateTier;
  onSelectTier: (tier: RateTier) => void;
  onBookClick: () => void;
  serviceTitle: string;
}

export default function RatesAndOffers({
  rates,
  offers,
  selectedTier,
  onSelectTier,
  onBookClick,
  serviceTitle,
}: RatesAndOffersProps) {
  // Pre-filled WhatsApp message for selected tier
  const whatsappNumber = '1234567890';
  const whatsappMessage = encodeURIComponent(
    `Hello Anahata Spa, I would like to book the "${serviceTitle}" for the "${selectedTier.label}" (${selectedTier.duration} at $${selectedTier.price}).`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="mb-5">
      {/* Rates Duration Selector */}
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h2 className="h4 fw-bold mb-1" style={{ color: '#142620' }}>
              Rates & Duration Options
            </h2>
            <p className="text-muted small mb-0">
              Select your preferred duration tier for this bespoke sanctuary ritual
            </p>
          </div>
        </div>

        <div className="row g-3">
          {rates.map((tier) => {
            const isSelected = selectedTier.id === tier.id;
            return (
              <div key={tier.id} className="col-12 col-md-4">
                <div
                  className={`card h-100 p-3 position-relative cursor-pointer transition-all ${
                    isSelected
                      ? 'border-2 border-warning shadow-sm'
                      : 'border border-secondary border-opacity-25'
                  }`}
                  style={{
                    backgroundColor: isSelected ? '#fbf8f2' : '#ffffff',
                    borderRadius: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onClick={() => onSelectTier(tier)}
                >
                  {tier.popular && (
                    <span
                      className="position-absolute top-0 end-0 badge rounded-pill m-2 px-3 py-1 fw-semibold text-uppercase"
                      style={{
                        backgroundColor: '#d4af37',
                        color: '#ffffff',
                        fontSize: '0.68rem',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Most Popular
                    </span>
                  )}

                  <div className="d-flex align-items-center mb-2">
                    <input
                      type="radio"
                      className="form-check-input me-2 mt-0"
                      name="durationTier"
                      checked={isSelected}
                      onChange={() => onSelectTier(tier)}
                      style={{ cursor: 'pointer' }}
                    />
                    <span className="fw-bold small" style={{ color: '#142620' }}>
                      {tier.duration}
                    </span>
                  </div>

                  <h3 className="h6 fw-semibold mb-2" style={{ color: '#234539' }}>
                    {tier.label}
                  </h3>

                  <div className="d-flex align-items-baseline gap-2 mb-3">
                    <span className="h4 fw-bold mb-0" style={{ color: '#d4af37' }}>
                      ${tier.price}
                    </span>
                    {tier.originalPrice && (
                      <span className="text-muted text-decoration-line-through small">
                        ${tier.originalPrice}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    className={`btn btn-sm w-100 fw-semibold ${
                      isSelected ? 'btn-spa-book-glow' : 'btn-outline-secondary'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectTier(tier);
                      onBookClick();
                    }}
                  >
                    {isSelected ? 'Book This Tier' : 'Select'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Special Offers & Promo Codes */}
      {offers.length > 0 && (
        <div className="mt-4 pt-3 border-top">
          <div className="d-flex align-items-center gap-2 mb-3">
            <i className="bi bi-tag-fill text-warning fs-5"></i>
            <h3 className="h5 fw-bold mb-0" style={{ color: '#142620' }}>
              Special Sanctuary Offers & Perks
            </h3>
          </div>

          <div className="row g-3">
            {offers.map((offer) => (
              <div key={offer.id} className="col-12 col-md-6">
                <div
                  className="card p-3 h-100 border-0 shadow-sm rounded-3"
                  style={{
                    background: 'linear-gradient(135deg, #f7f4ed 0%, #ede6d8 100%)',
                    border: '1px dashed #c5a880 !important',
                  }}
                >
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className="badge bg-warning text-dark fw-bold px-2 py-1 small">
                      {offer.badge}
                    </span>
                    <span className="fw-bold text-success small">{offer.discount}</span>
                  </div>
                  <h4 className="h6 fw-bold mb-1" style={{ color: '#142620' }}>
                    {offer.title}
                  </h4>
                  <p className="text-muted small mb-3 flex-grow-1">{offer.description}</p>
                  {offer.promoCode && (
                    <div className="d-flex align-items-center justify-content-between bg-white px-3 py-2 rounded-2 border">
                      <span className="small text-muted">Promo Code:</span>
                      <strong className="text-primary small font-monospace">
                        {offer.promoCode}
                      </strong>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Instant Action Bar */}
      <div className="card p-3 p-md-4 mt-4 rounded-4 shadow-sm border" style={{ backgroundColor: '#ffffff', borderColor: 'rgba(197, 168, 128, 0.4)' }}>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div>
            <div className="small text-muted">Selected Experience:</div>
            <strong className="text-dark">
              {serviceTitle} ({selectedTier.duration} • ${selectedTier.price})
            </strong>
          </div>
          <div className="d-flex gap-2 w-100 w-md-auto flex-wrap">
            <button
              type="button"
              className="btn btn-spa-book-glow px-4 py-2 flex-grow-1 flex-md-grow-0"
              onClick={onBookClick}
            >
              <i className="bi bi-calendar2-heart me-2"></i>
              Proceed to Book
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success px-4 py-2 flex-grow-1 flex-md-grow-0 d-flex align-items-center justify-content-center"
              style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
            >
              <i className="bi bi-whatsapp me-2"></i>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
