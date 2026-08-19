import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SpaNavbar from '@/components/layout/SpaNavbar';
import { servicesData } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services & Treatment Menu | Anahata Exotic Spa',
  description:
    'Explore our complete sanctuary menu: Couples retreats, authentic Balinese herbal massage, volcanic stone therapy, and floral hydrotherapy baths.',
};

export default function ServicesPage() {
  return (
    <div className="spa-ambient-bg min-vh-100 d-flex flex-column">
      <SpaNavbar />

      {/* Hero Header */}
      <section className="py-5 text-center bg-white bg-opacity-75 border-bottom">
        <div className="container py-3">
          <span
            className="text-uppercase fw-semibold small"
            style={{ color: '#c5a880', letterSpacing: '1.5px' }}
          >
            The Complete Sanctuary Menu
          </span>
          <h1 className="display-5 fw-bold mt-1 mb-3" style={{ color: '#142620' }}>
            Bespoke Massage & Wellness Treatments
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '620px', fontSize: '1.05rem' }}>
            Browse our signature experiences designed for deep relaxation, sensory rejuvenation, and romantic couples harmony.
          </p>
        </div>
      </section>

      {/* Services List */}
      <main className="py-5">
        <div className="container">
          <div className="row g-4">
            {servicesData.map((service) => (
              <div key={service.slug} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white d-flex flex-column" style={{ border: '1px solid rgba(197, 168, 128, 0.35)' }}>
                  {/* Service Image */}
                  <div className="position-relative" style={{ height: '220px', width: '100%' }}>
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <span
                      className="position-absolute top-0 end-0 m-3 badge rounded-pill px-3 py-2 shadow-sm"
                      style={{
                        background: 'rgba(20, 38, 32, 0.85)',
                        color: '#d4af37',
                        border: '1px solid rgba(212, 175, 55, 0.4)',
                        backdropFilter: 'blur(6px)',
                        fontSize: '0.72rem',
                      }}
                    >
                      {service.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="d-flex align-items-center text-warning small">
                          <i className="bi bi-star-fill me-1"></i>
                          <span className="fw-bold text-dark me-1">{service.rating}</span>
                          <span className="text-muted">({service.reviewCount})</span>
                        </div>
                        <span className="fw-bold text-dark" style={{ color: '#c5a880' }}>
                          From ${service.basePrice}
                        </span>
                      </div>

                      <h2 className="h5 fw-bold mb-2" style={{ color: '#142620' }}>
                        {service.title}
                      </h2>
                      <p className="text-muted small mb-3">{service.overview}</p>
                    </div>

                    <div className="d-flex gap-2 pt-2 border-top">
                      <Link
                        href={`/services/${service.slug}`}
                        className="btn btn-spa-book-glow btn-sm flex-grow-1 py-2"
                      >
                        View Details & Rates
                      </Link>
                      <a
                        href={`https://wa.me/1234567890?text=${encodeURIComponent(
                          `Hello Anahata Spa, I would like to inquire about "${service.title}".`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-success btn-sm px-3 d-flex align-items-center"
                        title="Chat on WhatsApp"
                      >
                        <i className="bi bi-whatsapp"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

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
