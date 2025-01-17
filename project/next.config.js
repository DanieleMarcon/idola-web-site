/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Remove trailing slashes for static export
  trailingSlash: false,
  // Configure base path if needed
  basePath: '',
  // Disable image optimization for static export
  images: { unoptimized: true },
  // Ignore ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;