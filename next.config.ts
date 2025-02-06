import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: 'build',
  //output: 'export',
  images: {
    unoptimized: true,
    domains: ['tyb-website-next.s3.ap-south-1.amazonaws.com'],
  }
};

export default nextConfig;
