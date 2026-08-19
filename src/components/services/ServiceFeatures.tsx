'use client';

import React from 'react';
import type { ServiceFeature } from '@/types/service';

interface ServiceFeaturesProps {
  overview: string;
  fullDescription: string;
  features: ServiceFeature[];
  ritualSteps: string[];
}

export default function ServiceFeatures({
  overview,
  fullDescription,
  features,
  ritualSteps,
}: ServiceFeaturesProps) {
  return (
    <section className="mb-5">
      {/* Overview & Sensory Narrative */}
      <div className="card p-4 p-md-5 rounded-4 border-0 shadow-sm mb-4 bg-white">
        <h2 className="h4 fw-bold mb-3" style={{ color: '#142620' }}>
          The Sanctuary Experience
        </h2>
        <p className="lead text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
          {overview}
        </p>
        <p className="text-muted small mb-0" style={{ lineHeight: '1.8' }}>
          {fullDescription}
        </p>
      </div>

      {/* Highlights & Features Grid */}
      <div className="mb-4">
        <h3 className="h5 fw-bold mb-3" style={{ color: '#142620' }}>
          Ritual Highlights & Pure Ingredients
        </h3>
        <div className="row g-3">
          {features.map((feature, idx) => (
            <div key={idx} className="col-12 col-md-6">
              <div className="card h-100 p-3 rounded-3 border bg-white shadow-sm">
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: '44px',
                      height: '44px',
                      backgroundColor: '#f0ebd8',
                      color: '#142620',
                    }}
                  >
                    <i className={`bi ${feature.icon} fs-5`}></i>
                  </div>
                  <div>
                    <h4 className="h6 fw-bold mb-1" style={{ color: '#142620' }}>
                      {feature.title}
                    </h4>
                    <p className="text-muted small mb-0">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step-by-Step Ritual Sequence */}
      {ritualSteps.length > 0 && (
        <div className="card p-4 rounded-4 border bg-white shadow-sm">
          <div className="d-flex align-items-center gap-2 mb-3">
            <i className="bi bi-clock-history text-warning fs-5"></i>
            <h3 className="h5 fw-bold mb-0" style={{ color: '#142620' }}>
              Step-by-Step Journey Progression
            </h3>
          </div>
          <div className="position-relative ps-3">
            <div
              className="position-absolute top-0 bottom-0 start-0 border-start border-2 border-warning"
              style={{ left: '8px' }}
            />
            {ritualSteps.map((step, idx) => (
              <div key={idx} className="d-flex align-items-start mb-3 position-relative">
                <span
                  className="rounded-circle bg-warning text-dark fw-bold d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                  style={{ width: '22px', height: '22px', fontSize: '0.72rem', zIndex: 2 }}
                >
                  {idx + 1}
                </span>
                <span className="small text-dark fw-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
