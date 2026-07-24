import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShopProvider } from '@/context/ShopContext';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
  title: 'GadgetFlux - Next.js Ecommerce',
  description: 'Next.js E-Commerce Sandbox with GA4 Analytics Tracking',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ShopProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ShopProvider>
        <GoogleTagManager gtmId="GTM-MX4GCJ8X"/>
      </body>
    </html>
  );
}
