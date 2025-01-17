import '../globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { CookieConsent } from '@/components/cookie-consent';
import { getDictionary } from '@/get-dictionary';
import { Locale, i18n } from '@/i18n-config';

export const metadata: Metadata = {
  title: 'Idola - Advanced Technology Solutions',
  description: 'Innovative AI, Blockchain, VR/AR, and Metaverse solutions for the future',
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  // Check if the locale is supported
  const isValidLocale = i18n.locales.includes(params.lang);
  if (!isValidLocale) {
    // For static export, we'll handle this client-side
    return null;
  }

  const dictionary = await getDictionary(params.lang);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="flex min-h-screen flex-col bg-black text-white">
        <Navbar dictionary={dictionary.navigation} lang={params.lang} />
        <main className="flex-1">{children}</main>
        <Footer dictionary={dictionary.navigation} lang={params.lang} />
      </div>
      <Toaster />
      <CookieConsent />
    </ThemeProvider>
  );
}