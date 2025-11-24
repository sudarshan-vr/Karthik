import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    unoptimized: true,
    domains: [],
  },
  
  // Output configuration
  output: 'standalone',
  
  // React configuration
  reactStrictMode: true,
  trailingSlash: false,
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Add any necessary webpack configuration here
    return config;
  },
  
  // Build configuration
  productionBrowserSourceMaps: false,
  
  // TypeScript configuration
  typescript: {
    // Ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
  
  // ESLint configuration
  eslint: {
    // Don't run ESLint during build
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
