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
    <div className="container" style={{ maxWidth: '460px' }}>
      <div className="card auth-card bg-white p-4 p-md-5">
        {/* Brand Header */}
        <div className="text-center mb-4">
          <div
            className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3 shadow-sm"
            style={{ width: '56px', height: '56px' }}
          >
            <i className="bi bi-shield-lock-fill fs-3"></i>
          </div>
          <h1 className="h4 fw-bold text-dark mb-1">Welcome Back</h1>
          <p className="text-muted small mb-0">
            Sign in to your account using your preferred method
          </p>
        </div>

        {isAuthenticated && user ? (
          /* Authenticated State Display */
          <div className="text-center py-3">
            <div className="alert alert-success d-flex align-items-center justify-content-center mb-4">
              <i className="bi bi-check-circle-fill me-2 fs-5"></i>
              <span className="fw-semibold">You are currently signed in</span>
            </div>

            <div className="p-3 bg-light rounded-3 mb-4 text-start">
              <div className="small text-muted">User ID: {user.id || 'usr_demo_123'}</div>
              {user.email && <div className="small fw-semibold mt-1">Email: {user.email}</div>}
              {user.phoneNumber && (
                <div className="small fw-semibold mt-1">Phone: {user.phoneNumber}</div>
              )}
            </div>

            <button
              type="button"
              className="btn btn-outline-danger w-100"
              onClick={() => dispatch(logout())}
            >
              <i className="bi bi-box-arrow-right me-2"></i>
              Sign Out
            </button>
          </div>
        ) : (
          <>
            {/* Method Switcher Tabs */}
            <ul className="nav nav-pills nav-fill auth-tabs bg-light p-1 rounded-3 mb-4">
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
            <div className="divider-with-text">or continue with</div>

            {/* Social Logins */}
            <SocialAuthButtons />

            {/* Footer */}
            <div className="text-center mt-4 pt-2 border-top">
              <span className="text-muted small">Don&apos;t have an account? </span>
              <Link href="#signup" className="text-primary fw-semibold text-decoration-none small">
                Sign up
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Security & Privacy Notice */}
      <div className="text-center mt-3">
        <p className="text-muted small mb-0">
          <i className="bi bi-shield-check me-1"></i> End-to-end encrypted & secure authentication
        </p>
      </div>
    </div>
  );
}
