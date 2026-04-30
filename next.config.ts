import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // No base path needed for username.github.io root deployment
  // basePath: '',
  // assetPrefix: '',
};

export default nextConfig;
