import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { CookieConsent } from '@/components/cookie-consent';
import { getDictionary } from '@/get-dictionary';
import { Locale, i18n } from '@/i18n-config';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  return {
    title: 'Idola - Advanced Technology Solutions',
    description: 'Innovative AI, Blockchain, VR/AR, and Metaverse solutions for the future',
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  // Validate locale
  if (!i18n.locales.includes(params.lang)) {
    notFound();
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