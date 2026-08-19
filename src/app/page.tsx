'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SpaNavbar from '@/components/layout/SpaNavbar';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { logout } from '@/store/slices/authSlice';

const romanticExperiences = [
  {
    id: 'couples-retreat',
    slug: 'couples-retreat',
    title: 'Candlelit Couples Sanctuary Retreat',
    subtitle: 'Private Pavilion • 120 mins',
    price: '$320 for two',
    badge: 'Romantic Favorite',
    image: '/images/couples_retreat.jpg',
    description:
      'Immerse in an intimate private garden suite with side-by-side warm aromatherapy massages, champagne, and gentle ambient flute melodies.',
  },
  {
    id: 'volcanic-stone-ritual',
    slug: 'volcanic-stone-ritual',
    title: 'Sensual Volcanic Oil & Stone Therapy',
    subtitle: 'Full Body Harmony • 90 mins',
    price: '$185',
    badge: 'Deep Relaxation',
    image: '/images/sensory_massage.jpg',
    description:
      'Warm botanical ylang-ylang oils poured in continuous streams combined with smooth heated basalt stones for intense sensory release.',
  },
  {
    id: 'floral-petal-bath',
    slug: 'floral-petal-bath',
    title: 'Exotic Floral Petal Bath & Elixir',
    subtitle: 'Hydrotherapy • 60 mins',
    price: '$140 for two',
    badge: 'Sensory Immersion',
    image: '/images/herbal_bath.jpg',
    description:
      'A carved natural stone bath floating thousands of fresh roses, jasmine, and frangipani blossoms surrounded by soft bamboo lanterns.',
  },
];

const treatments = [
  {
    id: 1,
    slug: 'royal-balinese-massage',
    title: 'Royal Balinese Herbal Massage',
    duration: '90 mins',
    price: '$165',
    category: 'Exotic Massage',
    icon: 'bi-flower1',
    description:
      'Ancient holistic therapy blending gentle rhythmic stretches, acupressure, and warm herbal poultices infused with exotic ylang-ylang.',
  },
  {
    id: 2,
    slug: 'ayurvedic-shirodhara',
    title: 'Ayurvedic Shirodhara & Abhyanga',
    duration: '90 mins',
    price: '$180',
    category: 'Mind & Body Calm',
    icon: 'bi-brightness-high',
    description:
      'Continuous warm herbal oil pour over the third-eye chakra paired with synchronized full-body tension release.',
  },
  {
    id: 3,
    slug: 'botanical-aromatherapy',
    title: 'Botanical Aromatherapy Bliss',
    duration: '60 mins',
    price: '$130',
    category: 'Sensory Reset',
    icon: 'bi-stars',
    description:
      'Custom-blended cold-pressed essential oils formulated to revitalize circulation and dissolve nervous fatigue.',
  },
  {
    id: 4,
    slug: 'volcanic-stone-ritual',
    title: 'Warm Volcanic Stone Ritual',
    duration: '75 mins',
    price: '$150',
    category: 'Thermal Healing',
    icon: 'bi-droplet-half',
    description:
      'Smooth basalt stones heated to perfection glide over energy meridians to melt away deep muscular tension.',
  },
];

export default function Home() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <div className="spa-ambient-bg min-vh-100 d-flex flex-column">
      <SpaNavbar />

      {/* Hero Section */}
      <section className="py-5 text-center position-relative">
        <div className="container py-4">
          <div
            className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-white shadow-sm mb-3 border"
            style={{ borderColor: 'rgba(197, 168, 128, 0.4)' }}
          >
            <i className="bi bi-flower1 text-warning"></i>
            <span
              className="small fw-semibold text-uppercase"
              style={{ letterSpacing: '1px', color: '#182e26', fontSize: '0.75rem' }}
            >
              Exotic Sanctuary & Romantic Wellness
            </span>
          </div>

          <h1 className="display-5 fw-bold mb-3" style={{ color: '#182e26', letterSpacing: '-0.5px' }}>
            Where Ancient Rituals <br className="d-none d-md-block" /> Meet Intimate Serenity
          </h1>
          <p className="lead text-muted mx-auto mb-4" style={{ maxWidth: '640px', fontSize: '1.05rem' }}>
            Indulge in sensory massage therapies, candlelit private couple pavilions, and exotic botanical hydrotherapy crafted to reignite harmony and connection.
          </p>

          {/* Dynamic Hero Session Banner or Action Buttons */}
          {isAuthenticated && user ? (
            <div className="card spa-glass-card mx-auto p-4 mb-4" style={{ maxWidth: '520px' }}>
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                <div className="text-start">
                  <div className="small text-muted">Welcome to your sanctuary,</div>
                  <div className="fw-bold fs-5" style={{ color: '#182e26' }}>
                    {user.name || user.email || 'Sanctuary Member'}
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <Link href="/services" className="btn btn-spa-book-glow btn-sm px-3">
                    <i className="bi bi-calendar2-heart me-1"></i>
                    Browse Menu
                  </Link>
                  <button
                    type="button"
                    className="btn btn-spa-signout btn-sm px-3"
                    onClick={() => dispatch(logout())}
                  >
                    <i className="bi bi-box-arrow-right me-1"></i>
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              {/* Distinct Book / Sign Up Button */}
              <Link href="/services" className="btn btn-spa-book-glow py-3 px-4">
                <i className="bi bi-flower2 me-2"></i>
                Explore Sanctuary Menu
              </Link>
              {/* Distinct Sign In Button */}
              <Link href="/login" className="btn btn-spa-signin-glass py-3 px-4">
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Member Sign In
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Romantic & Exotic Couples Sanctuary Photo Showcase */}
      <section id="romantic-retreats" className="py-5 bg-white bg-opacity-90 border-top border-bottom">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-uppercase fw-semibold small" style={{ color: '#c5a880', letterSpacing: '1.5px' }}>
              Intimate & Sensory Journeys
            </span>
            <h2 className="fw-bold mt-1" style={{ color: '#182e26' }}>
              Exotic Romantic Spa & Couples Retreats
            </h2>
            <p className="text-muted small mx-auto" style={{ maxWidth: '580px' }}>
              Designed for couples, partners, and discerning individuals seeking sensual calm, warm botanical oils, and private candlelit pavilions.
            </p>
          </div>

          <div className="row g-4">
            {romanticExperiences.map((item) => (
              <div key={item.id} className="col-12 col-lg-4">
                <div className="spa-photo-card h-100 bg-white d-flex flex-column">
                  <div className="position-relative" style={{ height: '260px', width: '100%' }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                    <span
                      className="position-absolute top-0 end-0 m-3 badge rounded-pill px-3 py-2 shadow-sm"
                      style={{
                        background: 'rgba(20, 38, 32, 0.85)',
                        color: '#d4af37',
                        border: '1px solid rgba(212, 175, 55, 0.5)',
                        backdropFilter: 'blur(6px)',
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="small fw-semibold text-muted">{item.subtitle}</span>
                        <span className="fw-bold" style={{ color: '#c5a880' }}>
                          {item.price}
                        </span>
                      </div>
                      <h3 className="h5 fw-bold mb-2" style={{ color: '#182e26' }}>
                        {item.title}
                      </h3>
                      <p className="text-muted small mb-3">{item.description}</p>
                    </div>

                    <Link
                      href={`/services/${item.slug}`}
                      className="btn btn-spa-book-glow w-100 py-2 btn-sm mt-2"
                    >
                      <i className="bi bi-calendar2-heart me-2"></i>
                      View Rates & Reserve
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Holistic Massage Therapies */}
      <section id="treatments" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-uppercase fw-semibold small" style={{ color: '#c5a880', letterSpacing: '1.5px' }}>
              Master Therapies
            </span>
            <h2 className="fw-bold mt-1" style={{ color: '#182e26' }}>
              Individual Massage & Wellness Rituals
            </h2>
            <p className="text-muted small mx-auto" style={{ maxWidth: '540px' }}>
              Every treatment is tailored to your energy flow using hand-pressed organic botanicals.
            </p>
          </div>

          <div className="row g-4">
            {treatments.map((t) => (
              <div key={t.id} className="col-12 col-md-6 col-lg-3">
                <div
                  className="card h-100 border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-column"
                  style={{
                    transition: 'transform 0.2s ease',
                    border: '1px solid rgba(197, 168, 128, 0.3)',
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span
                      className="d-inline-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: '42px',
                        height: '42px',
                        backgroundColor: '#f0ebd8',
                        color: '#182e26',
                      }}
                    >
                      <i className={`bi ${t.icon} fs-5`}></i>
                    </span>
                    <span className="badge rounded-pill bg-light text-dark border px-3 py-2 fw-semibold">
                      {t.duration}
                    </span>
                  </div>
                  <h3 className="h6 fw-bold mb-1" style={{ color: '#182e26' }}>
                    {t.title}
                  </h3>
                  <div className="small fw-semibold mb-2" style={{ color: '#c5a880' }}>
                    {t.category} • {t.price}
                  </div>
                  <p className="text-muted small flex-grow-1 mb-3">{t.description}</p>
                  <Link
                    href={`/services/${t.slug}`}
                    className="btn btn-outline-secondary btn-sm w-100 py-2 fw-medium rounded-3"
                    style={{ borderColor: 'rgba(197, 168, 128, 0.6)' }}
                  >
                    View Details & Rates
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link href="/services" className="btn btn-spa-primary px-4 py-3 fw-semibold">
              <i className="bi bi-grid me-2"></i>
              View Full Sanctuary Treatment Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Spa Sanctuary Promise */}
      <section className="py-5 bg-white bg-opacity-70 border-top">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-12 col-md-4">
              <div className="p-3">
                <i className="bi bi-droplet fs-1 mb-2 d-block" style={{ color: '#c5a880' }}></i>
                <h4 className="h6 fw-bold" style={{ color: '#182e26' }}>
                  100% Organic Cold-Pressed Oils
                </h4>
                <p className="text-muted small mb-0">
                  Ethically harvested botanicals free from synthetic aromas or preservatives.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="p-3">
                <i className="bi bi-shield-check fs-1 mb-2 d-block" style={{ color: '#234539' }}></i>
                <h4 className="h6 fw-bold" style={{ color: '#182e26' }}>
                  Private Romantic Pavilions
                </h4>
                <p className="text-muted small mb-0">
                  Acoustically isolated tranquility suites with rain showers and private petal baths.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="p-3">
                <i className="bi bi-gem fs-1 mb-2 d-block" style={{ color: '#c5a880' }}></i>
                <h4 className="h6 fw-bold" style={{ color: '#182e26' }}>
                  Master Holistic Therapists
                </h4>
                <p className="text-muted small mb-0">
                  Dedicated artisans trained in ancient Balinese, Thai, and Ayurvedic bodywork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
