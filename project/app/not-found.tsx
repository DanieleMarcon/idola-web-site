"use client";

import { useEffect } from 'react';
import { i18n } from '@/i18n-config';

export default function RootNotFound() {
  useEffect(() => {
    window.location.href = `/${i18n.defaultLocale}`;
  }, []);

  return null;
}