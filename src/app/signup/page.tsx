'use client';

import React from 'react';
import Link from 'next/link';
import SignUpForm from '@/components/auth/SignUpForm';
import SocialAuthButtons from '@/components/auth/SocialAuthButtons';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logout } from '@/store/slices/authSlice';

export default function SignUpPage() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <div className="container" style={{ maxWidth: '540px' }}>
      <div className="card spa-glass-card p-4 p-md-5">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="lotus-badge mb-3">
            <i className="bi bi-flower2 fs-2"></i>
          </div>
          <h1 className="h4 fw-bold mb-1" style={{ color: '#182e26', letterSpacing: '0.3px' }}>
            Begin Your Wellness Journey
          </h1>
          <p className="text-muted small mb-0">
            Create an exclusive membership for bespoke massage & holistic spa therapies
          </p>
        </div>

        {isAuthenticated && user ? (
          /* Authenticated State & Sign Out View */
          <div className="text-center py-2">
            <div
              className="alert d-flex align-items-center justify-content-center mb-4 py-2 px-3 border-0 shadow-sm"
              style={{ backgroundColor: '#eef6f2', color: '#1b4d3e' }}
            >
              <i className="bi bi-check-circle-fill me-2 fs-5 text-success"></i>
              <span className="fw-semibold small">Active Member Session</span>
            </div>

            <div className="p-3 bg-light rounded-3 mb-4 text-start border">
              {user.name && (
                <div className="fw-bold mb-1" style={{ color: '#182e26' }}>
                  {user.name}
                </div>
              )}
              {user.email && <div className="small text-muted mb-1">Email: {user.email}</div>}
              {user.phoneNumber && (
                <div className="small text-muted">Phone: {user.phoneNumber}</div>
              )}
            </div>

            <div className="d-grid gap-2 mb-3">
              <Link href="/" className="btn btn-spa-gold py-2 fw-semibold">
                <i className="bi bi-calendar2-check me-2"></i>
                Browse Spa Treatments
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
            {/* Main Registration Form */}
            <SignUpForm />

            {/* Social Divider */}
            <div className="divider-spa">or sign up with</div>

            {/* Google Auth */}
            <SocialAuthButtons />

            {/* Footer */}
            <div className="text-center mt-4 pt-3 border-top">
              <span className="text-muted small">Already a Sanctuary Member? </span>
              <Link href="/login" className="fw-semibold text-decoration-none small" style={{ color: '#c5a880' }}>
                Sign In
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Trust & Privacy Notice */}
      <div className="text-center mt-3">
        <p className="text-muted small mb-0">
          <i className="bi bi-flower1 me-1" style={{ color: '#c5a880' }}></i>
          Holistic Care • Organic Ingredients • Bespoke Wellness
        </p>
      </div>
    </div>
  );
}
