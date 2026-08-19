import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign In | Secure Portal',
  description: 'Access your account securely using Email, WhatsApp OTP, or Google',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Auth Minimalist Header */}
      <header className="navbar navbar-expand-lg bg-white border-bottom shadow-sm py-2">
        <div className="container">
          <Link href="/" className="navbar-brand d-flex align-items-center text-dark fw-bold">
            <span className="bg-primary text-white rounded p-1 me-2 d-inline-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }}>
              <i className="bi bi-shield-lock-fill small"></i>
            </span>
            <span>SecureApp</span>
          </Link>
          <div className="d-flex align-items-center">
            <Link href="/" className="btn btn-outline-secondary btn-sm">
              <i className="bi bi-arrow-left me-1"></i> Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Auth Content */}
      <main className="flex-grow-1 d-flex align-items-center justify-content-center py-5 px-3">
        {children}
      </main>

      {/* Auth Footer */}
      <footer className="bg-white border-top py-3 text-center text-muted small">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
            <div>
              &copy; {new Date().getFullYear()} SecureApp. All rights reserved.
            </div>
            <div className="d-flex gap-3">
              <Link href="#privacy" className="text-muted text-decoration-none">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-muted text-decoration-none">
                Terms of Service
              </Link>
              <Link href="#support" className="text-muted text-decoration-none">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
