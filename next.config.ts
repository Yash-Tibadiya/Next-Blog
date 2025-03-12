import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "lh3.googleusercontent.com",
    ],
    unoptimized: true,
  },
};

export default nextConfig;
