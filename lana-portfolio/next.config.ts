import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['placehold.co'],
  },
  // Modify the experimental options to properly handle CSS optimization
  experimental: {
    // Remove optimizeCss or set it to false until the issue is resolved
    // optimizeCss: true,
  },
};

export default nextConfig;
