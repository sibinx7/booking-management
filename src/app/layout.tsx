import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import StoreProvider from '@/components/providers/StoreProvider';

export const metadata: Metadata = {
  title: 'Secure Authentication - Next.js & Bootstrap 5',
  description: 'Authentication portal with Email, WhatsApp OTP, and Google login',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
