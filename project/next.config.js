/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Remove trailing slashes for static export
  trailingSlash: false,
  // Configure base path if needed
  basePath: '',
};

module.exports = nextConfig;