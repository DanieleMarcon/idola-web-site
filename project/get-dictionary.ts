import 'server-only';
import type { Locale } from './i18n-config';

// Define the dictionary type
type Dictionary = {
  navigation: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    closeChat: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
    cta: string;
  };
  whyChooseUs: {
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    cta: string;
  };
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  it: () => import('./dictionaries/it.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  if (!dictionaries[locale]) {
    throw new Error(`Dictionary for locale '${locale}' not found`);
  }
  return dictionaries[locale]();
};