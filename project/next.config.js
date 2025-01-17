/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable i18n routing
  i18n: {
    locales: ['it', 'en', 'es'],
    defaultLocale: 'it',
    localeDetection: true
  },
  // Remove trailing slashes
  trailingSlash: false,
  // Configure base path if needed
  basePath: '',
  // Enable image optimization
  images: {
    domains: ['images.unsplash.com'],
  },
  // Ignore ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;