"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Translations = Record<string, any>;

const defaultLocale = 'it';

export function useTranslation() {
  const router = useRouter();
  const [translations, setTranslations] = useState<Translations>({});
  const [currentLocale, setCurrentLocale] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('idola-locale') || defaultLocale;
    }
    return defaultLocale;
  });

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const savedLocale = localStorage.getItem('idola-locale') || currentLocale;
        const module = await import(`../locales/${savedLocale}.json`);
        setTranslations(module.default);
        setCurrentLocale(savedLocale);
      } catch (error) {
        console.error('Error loading translations:', error);
        // Fallback to Italian if translation fails
        const fallbackModule = await import('../locales/it.json');
        setTranslations(fallbackModule.default);
        setCurrentLocale('it');
      }
    };

    loadTranslations();
  }, [currentLocale]);

  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value?.[k];
      if (!value) break;
    }
    
    return value || key;
  };

  const changeLanguage = (locale: string) => {
    localStorage.setItem('idola-locale', locale);
    setCurrentLocale(locale);
    // Use window.location for client-side navigation
    window.location.pathname = window.location.pathname;
  };

  return { t, changeLanguage, currentLocale };
}