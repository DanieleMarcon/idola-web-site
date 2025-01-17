/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Rimuoviamo la configurazione i18n poiché non è compatibile con output: 'export'
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  trailingSlash: true, // Aggiungiamo trailing slash per migliore compatibilità con hosting statici
  basePath: '',
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;