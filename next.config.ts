import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Only apply basePath and assetPrefix in production for GitHub Pages
  basePath: isProd ? '/nikhil-waradkar' : '',
  assetPrefix: isProd ? '/nikhil-waradkar' : '',
};

export default nextConfig;
