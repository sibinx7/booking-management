import type { Metadata } from 'next';
import Link from 'next/link';
import SpaNavbar from '@/components/layout/SpaNavbar';

export const metadata: Metadata = {
  title: 'Sign In | Anahata Exotic Spa & Wellness Sanctuary',
  description: 'Sign in to access your luxury spa treatments, wellness bookings, and bespoke massage therapies.',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="spa-ambient-bg d-flex flex-column min-vh-100">
      <SpaNavbar />

      {/* Main Content */}
      <main className="flex-grow-1 d-flex align-items-center justify-content-center py-5 px-3">
        {children}
      </main>

      {/* Spa Luxury Footer */}
      <footer className="bg-white border-top py-4 text-muted small mt-auto">
        <div className="container">
          <div className="row g-3 align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start">
              <span className="fw-semibold text-dark">Anahata Exotic Spa & Sanctuary</span>
              <p className="mb-0 text-muted" style={{ fontSize: '0.78rem' }}>
                Organic Aromatherapy • Traditional Herbal Massage • Sound Bath Healing
              </p>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <Link href="#privacy" className="text-muted text-decoration-none">
                  Privacy Policy
                </Link>
                <Link href="#terms" className="text-muted text-decoration-none">
                  Wellness Terms
                </Link>
                <Link href="#concierge" className="text-muted text-decoration-none">
                  Spa Concierge
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
