import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { CookieConsent } from '@/components/cookie-consent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Idola - Advanced Technology Solutions',
  description: 'Innovative AI, Blockchain, VR/AR, and Metaverse solutions for the future',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}