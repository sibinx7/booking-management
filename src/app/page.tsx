import Link from 'next/link';

export default function Home() {
  return (
    <main className="d-flex align-items-center justify-content-center min-vh-100 bg-light p-3">
      <div className="card shadow-sm border-0 p-4 p-md-5 text-center" style={{ maxWidth: '540px' }}>
        <div className="mb-4">
          <div
            className="d-inline-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-circle mb-3"
            style={{ width: '64px', height: '64px' }}
          >
            <i className="bi bi-shield-lock-fill fs-2"></i>
          </div>
          <h1 className="h3 fw-bold mb-2">Welcome to the App</h1>
          <p className="text-muted">
            Next.js App Router with Bootstrap 5, Redux Toolkit, Formik & Yup validation.
          </p>
        </div>

        <div className="d-grid gap-3">
          <Link href="/login" className="btn btn-primary btn-lg py-2 fw-semibold">
            <i className="bi bi-box-arrow-in-right me-2"></i>
            Go to Login Page
          </Link>
        </div>

        <div className="mt-4 pt-3 border-top text-muted small">
          Includes: Email & Password, WhatsApp OTP, and Google Authentication
        </div>
      </div>
    </main>
  );
}
