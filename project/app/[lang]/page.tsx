import { HeroSection } from "@/components/hero-section";
import { ServicesOverview } from "@/components/services-overview";
import { WhyChooseUs } from "@/components/why-choose-us";
import { getDictionary } from '@/get-dictionary';
import { Locale, i18n } from '@/i18n-config';

// Add generateStaticParams function
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection dictionary={dictionary.hero} />
      <div 
        className="relative bg-fixed bg-cover bg-center py-24"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
        }}
      >
        <ServicesOverview dictionary={dictionary.services} />
      </div>
      <WhyChooseUs dictionary={dictionary.whyChooseUs} />
      <div 
        className="relative bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
      </div>
    </div>
  );
}