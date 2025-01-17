import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { CookieConsent } from '@/components/cookie-consent';
import { getDictionary } from '@/get-dictionary';
import { Locale, i18n } from '@/i18n-config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Idola - Advanced Technology Solutions',
  description: 'Innovative AI, Blockchain, VR/AR, and Metaverse solutions for the future',
  icons: {
    icon: '/favicon.ico',
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <div className={`${inter.className} min-h-screen bg-black text-white`}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <div className="flex min-h-screen flex-col">
          <Navbar dictionary={dictionary.navigation} lang={params.lang} />
          <main className="flex-1">{children}</main>
          <Footer dictionary={dictionary.navigation} lang={params.lang} />
        </div>
        <Toaster />
        <CookieConsent lang={params.lang} />
      </ThemeProvider>
    </div>
  );
}