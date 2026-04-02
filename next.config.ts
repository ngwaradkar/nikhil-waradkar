import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure the basePath matches your repository name for github.io deployment
  basePath: '/nikhil-waradkar',
  assetPrefix: '/nikhil-waradkar',
};

export default nextConfig;
