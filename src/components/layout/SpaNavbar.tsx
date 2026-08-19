'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logout } from '@/store/slices/authSlice';

export default function SpaNavbar() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <header className="navbar navbar-expand-lg bg-white border-bottom shadow-sm py-2 sticky-top">
      <div className="container">
        {/* Spa Brand Logo */}
        <Link href="/" className="navbar-brand d-flex align-items-center text-dark text-decoration-none">
          <span
            className="d-inline-flex align-items-center justify-content-center rounded-circle me-2"
            style={{
              width: '38px',
              height: '38px',
              background: 'linear-gradient(135deg, #182e26 0%, #2a4d40 100%)',
              color: '#c5a880',
            }}
          >
            <i className="bi bi-flower1 fs-5"></i>
          </span>
          <div className="d-flex flex-column">
            <span className="fw-bold fs-6 lh-1" style={{ color: '#182e26', letterSpacing: '0.5px' }}>
              ANAHATA SPA
            </span>
            <span className="text-muted" style={{ fontSize: '0.68rem', letterSpacing: '1px' }}>
              EXOTIC WELLNESS & MASSAGE
            </span>
          </div>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 p-2"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <i className={`bi ${isNavOpen ? 'bi-x-lg' : 'bi-list'} fs-4 text-dark`}></i>
        </button>

        {/* Navigation Content */}
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show mt-3 mt-lg-0' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link href="/" className="nav-link text-dark fw-medium px-2">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link text-muted fw-medium px-2">
                All Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services/couples-retreat" className="nav-link text-muted fw-medium px-2">
                Couples Retreats
              </Link>
            </li>
          </ul>

          {/* Dynamic Session Actions */}
          <div className="d-flex align-items-center gap-2 flex-wrap">
            {isAuthenticated && user ? (
              <div className="d-flex align-items-center gap-2 w-100 w-lg-auto justify-content-between justify-content-lg-start">
                <div
                  className="d-inline-flex align-items-center py-1 px-3 rounded-pill"
                  style={{ backgroundColor: '#f0ebd8', color: '#182e26' }}
                >
                  <i className="bi bi-person-check-fill text-success me-2"></i>
                  <span className="small fw-semibold">
                    {user.name || user.email || user.phoneNumber || 'Spa Member'}
                  </span>
                </div>
                <button
                  type="button"
                  className="btn btn-spa-signout btn-sm d-flex align-items-center py-1 px-3"
                  onClick={handleSignOut}
                  title="Sign out of your account"
                >
                  <i className="bi bi-box-arrow-right me-1"></i>
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="d-flex align-items-center gap-2 w-100 w-lg-auto">
                <Link
                  href="/login"
                  className="btn btn-spa-signin-glass btn-sm px-3 flex-grow-1 flex-lg-grow-0"
                >
                  <i className="bi bi-box-arrow-in-right me-1"></i>
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="btn btn-spa-book-glow btn-sm px-3 flex-grow-1 flex-lg-grow-0"
                >
                  <i className="bi bi-flower2 me-1"></i>
                  Book / Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
