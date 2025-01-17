import { redirect } from 'next/navigation';
import { i18n } from '@/i18n-config';

// Redirect root to default locale
export default function RootPage() {
  redirect(`/${i18n.defaultLocale}`);
}