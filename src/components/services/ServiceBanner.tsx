'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { ServiceItem } from '@/types/service';

interface ServiceBannerProps {
  service: ServiceItem;
  onBookClick: () => void;
  selectedPrice?: number;
  selectedDuration?: string;
}

export default function ServiceBanner({
  service,
  onBookClick,
  selectedPrice,
  selectedDuration,
}: ServiceBannerProps) {
  const currentPrice = selectedPrice || service.basePrice;
  const currentDuration = selectedDuration || service.duration;

  // Pre-filled WhatsApp link
  const whatsappNumber = '1234567890'; // Placeholder spa concierge WhatsApp
  const whatsappMessage = encodeURIComponent(
    `Hello Anahata Spa Concierge, I would like to inquire about booking the "${service.title}" (${currentDuration} for $${currentPrice}). Could you please advise available slots?`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="position-relative overflow-hidden text-white" style={{ minHeight: '460px', backgroundColor: '#142620' }}>
      {/* Background Image with Dark Gradient Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 1 }}>
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', opacity: 0.4 }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              'linear-gradient(to right, rgba(20, 38, 32, 0.95) 0%, rgba(20, 38, 32, 0.75) 60%, rgba(20, 38, 32, 0.4) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="container position-relative py-5" style={{ zIndex: 2 }}>
        {/* Breadcrumb Navigation */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb mb-0 small">
            <li className="breadcrumb-item">
              <Link href="/" className="text-white text-opacity-75 text-decoration-none">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/services" className="text-white text-opacity-75 text-decoration-none">
                Services
              </Link>
            </li>
            <li className="breadcrumb-item active text-warning" aria-current="page">
              {service.title}
            </li>
          </ol>
        </nav>

        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-8">
            {/* Category Badge & Ratings */}
            <div className="d-flex align-items-center gap-2 flex-wrap mb-3">
              <span
                className="badge rounded-pill px-3 py-2 text-uppercase fw-semibold"
                style={{
                  background: 'rgba(212, 175, 55, 0.25)',
                  color: '#d4af37',
                  border: '1px solid rgba(212, 175, 55, 0.6)',
                  letterSpacing: '1px',
                  fontSize: '0.72rem',
                }}
              >
                {service.category}
              </span>
              <div className="d-flex align-items-center bg-black bg-opacity-40 px-3 py-1 rounded-pill border border-secondary border-opacity-50">
                <i className="bi bi-star-fill text-warning me-1 small"></i>
                <span className="fw-bold small me-1">{service.rating}</span>
                <span className="text-white text-opacity-75 small">
                  ({service.reviewCount} guest reviews)
                </span>
              </div>
            </div>

            <h1 className="display-5 fw-bold mb-2 text-white" style={{ letterSpacing: '-0.5px' }}>
              {service.title}
            </h1>
            <p className="lead text-white text-opacity-90 mb-4" style={{ maxWidth: '640px', fontSize: '1.1rem' }}>
              {service.tagline}
            </p>

            {/* Quick Action Triggers */}
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <button
                type="button"
                className="btn btn-spa-book-glow py-3 px-4 shadow"
                onClick={onBookClick}
              >
                <i className="bi bi-calendar-heart me-2"></i>
                Book Now • ${currentPrice}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success py-3 px-4 fw-semibold d-flex align-items-center shadow"
                style={{
                  borderRadius: '0.85rem',
                  backgroundColor: '#25D366',
                  borderColor: '#25D366',
                  color: '#ffffff',
                }}
              >
                <i className="bi bi-whatsapp me-2 fs-5"></i>
                WhatsApp Concierge
              </a>
            </div>
          </div>

          {/* Quick Rate Overview Pill on Right */}
          <div className="col-12 col-lg-4 text-lg-end">
            <div
              className="d-inline-block p-4 rounded-4 text-start bg-black bg-opacity-50 border border-warning border-opacity-25 shadow-lg"
              style={{ backdropFilter: 'blur(10px)', minWidth: '260px' }}
            >
              <span className="small text-white text-opacity-75 text-uppercase fw-semibold d-block" style={{ letterSpacing: '1px' }}>
                Starting From
              </span>
              <div className="display-6 fw-bold text-warning mb-1">${service.basePrice}</div>
              <div className="small text-white text-opacity-90 mb-3">
                <i className="bi bi-clock me-1 text-warning"></i>
                {currentDuration} Standard Session
              </div>
              <div className="text-white text-opacity-75" style={{ fontSize: '0.78rem' }}>
                <i className="bi bi-shield-check text-success me-1"></i>
                Includes organic oils & herbal tea
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
