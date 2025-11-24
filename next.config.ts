import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: [],
  },
  output: 'standalone',
  // Enable React strict mode
  reactStrictMode: true,
  // Ensure static exports work correctly
  trailingSlash: false,
  // Add webpack configuration
  webpack: (config, { isServer }) => {
    // Important: return the modified config
    return config
  },
  // Enable production browser source maps
  productionBrowserSourceMaps: false,
  // Configure build output
  experimental: {
    // Enable the new React server components renderer
    serverComponentsExternalPackages: [],
  },
}

export default nextConfig
