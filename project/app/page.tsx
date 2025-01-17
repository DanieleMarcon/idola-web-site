"use client";

import { useEffect } from 'react';
import { i18n } from '@/i18n-config';

export default function RootPage() {
  useEffect(() => {
    // Get browser language
    const browserLang = navigator.language.split('-')[0];
    // Check if browser language is supported, otherwise use default
    const locale = i18n.locales.includes(browserLang as any) ? browserLang : i18n.defaultLocale;
    // Redirect to localized page
    window.location.href = `/${locale}`;
  }, []);

  return null;
}