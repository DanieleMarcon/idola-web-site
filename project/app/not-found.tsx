import { redirect } from 'next/navigation';
import { i18n } from '@/i18n-config';

// Redirect 404 to default locale
export default function RootNotFound() {
  redirect(`/${i18n.defaultLocale}`);
}