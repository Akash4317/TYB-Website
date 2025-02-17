import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: ['tyb-website-next.s3.ap-south-1.amazonaws.com'],
  },
  distDir: 'build',
};

export default nextConfig;
