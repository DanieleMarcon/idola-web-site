/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: '',
  i18n: {
    locales: ['it', 'en', 'es'],
    defaultLocale: 'it',
    localeDetection: true,
  },
};

module.exports = nextConfig;