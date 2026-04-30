import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your GitHub Pages is at https://<username>.github.io/<repo>/, 
  // you might need a base path. Assuming root for now.
  // basePath: '/PersonalPage',
};

export default nextConfig;
