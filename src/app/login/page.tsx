'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import EmailPasswordForm from '@/components/auth/EmailPasswordForm';
import WhatsappOtpForm from '@/components/auth/WhatsappOtpForm';
import SocialAuthButtons from '@/components/auth/SocialAuthButtons';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logout } from '@/store/slices/authSlice';

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState<'email' | 'whatsapp'>('email');

  return (
    <div className="container" style={{ maxWidth: '480px' }}>
      <div className="card spa-glass-card p-4 p-md-5">
        {/* Spa Lotus Header */}
        <div className="text-center mb-4">
          <div className="lotus-badge mb-3">
            <i className="bi bi-flower1 fs-2"></i>
          </div>
          <h1 className="h4 fw-bold mb-1" style={{ color: '#182e26', letterSpacing: '0.3px' }}>
            Welcome to Your Sanctuary
          </h1>
          <p className="text-muted small mb-0">
            Sign in to access your bespoke massage therapies & wellness treatments
          </p>
        </div>

        {isAuthenticated && user ? (
          /* Authenticated Member State & Sign Out View */
          <div className="text-center py-2">
            <div
              className="alert d-flex align-items-center justify-content-center mb-4 py-2 px-3 border-0 shadow-sm"
              style={{ backgroundColor: '#eef6f2', color: '#1b4d3e' }}
            >
              <i className="bi bi-check-circle-fill me-2 fs-5 text-success"></i>
              <span className="fw-semibold small">Active Sanctuary Member Session</span>
            </div>

            <div className="p-3 bg-light rounded-3 mb-4 text-start border">
              <div className="d-flex align-items-center gap-3 mb-3 pb-2 border-bottom">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{ width: '42px', height: '42px', background: '#2a4d40' }}
                >
                  <i className="bi bi-person-fill fs-5"></i>
                </div>
                <div>
                  <div className="fw-bold" style={{ color: '#182e26' }}>
                    {user.name || 'Honored Guest'}
                  </div>
                  <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                    Member ID: {user.id || 'ANAHATA-VIP-88'}
                  </div>
                </div>
              </div>

              {user.email && (
                <div className="small mb-1 d-flex align-items-center">
                  <i className="bi bi-envelope me-2 text-muted"></i>
                  <span>{user.email}</span>
                </div>
              )}
              {user.phoneNumber && (
                <div className="small d-flex align-items-center">
                  <i className="bi bi-whatsapp me-2 text-success"></i>
                  <span>{user.phoneNumber}</span>
                </div>
              )}
            </div>

            {/* Quick Actions & Sign Out */}
            <div className="d-grid gap-2 mb-3">
              <Link href="/" className="btn btn-spa-gold py-2 fw-semibold">
                <i className="bi bi-calendar2-check me-2"></i>
                Explore & Book Treatments
              </Link>
              <button
                type="button"
                className="btn btn-spa-signout py-2 d-flex align-items-center justify-content-center"
                onClick={() => dispatch(logout())}
              >
                <i className="bi bi-box-arrow-right me-2"></i>
                Sign Out from Sanctuary
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Method Switcher Tabs */}
            <ul className="nav nav-pills nav-fill spa-nav-tabs bg-light p-1 rounded-3 mb-4">
              <li className="nav-item">
                <button
                  type="button"
                  className={`nav-link w-100 d-flex align-items-center justify-content-center ${
                    activeTab === 'email' ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab('email')}
                >
                  <i className="bi bi-envelope-fill me-2"></i>
                  Email
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className={`nav-link w-100 d-flex align-items-center justify-content-center ${
                    activeTab === 'whatsapp' ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab('whatsapp')}
                >
                  <i className="bi bi-whatsapp me-2 text-success"></i>
                  WhatsApp OTP
                </button>
              </li>
            </ul>

            {/* Form Content */}
            {activeTab === 'email' ? <EmailPasswordForm /> : <WhatsappOtpForm />}

            {/* Social Login Divider */}
            <div className="divider-spa">or sign in with</div>

            {/* Social Logins */}
            <SocialAuthButtons />

            {/* Footer */}
            <div className="text-center mt-4 pt-3 border-top">
              <span className="text-muted small">New to Anahata Spa? </span>
              <Link href="/signup" className="fw-semibold text-decoration-none small" style={{ color: '#c5a880' }}>
                Join & Book Treatment
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Security & Serenity Promise */}
      <div className="text-center mt-3">
        <p className="text-muted small mb-0">
          <i className="bi bi-shield-check me-1" style={{ color: '#2a4d40' }}></i>
          100% confidential & encrypted sanctuary portal
        </p>
      </div>
    </div>
  );
}
