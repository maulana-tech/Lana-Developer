import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Add this to ensure proper handling of CSS variables
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
