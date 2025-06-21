/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true, // Removed - no longer needed in Next.js 14+
  // },
  transpilePackages: ['@dailysync/config', '@dailysync/database'],
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3001',
  },
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: `${process.env.API_BASE_URL || 'http://localhost:3001'}/api/:path*`,
      },
    ];
  },
  images: {
    domains: ['localhost'],
  },
  // Vercel-specific optimizations
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  // Ensure proper TypeScript compilation
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporarily disable ESLint during Vercel builds
  },
};

module.exports = nextConfig;
