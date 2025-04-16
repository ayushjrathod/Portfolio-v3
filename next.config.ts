import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
    unoptimized: false,
    minimumCacheTTL: 60,
    formats: ["image/webp"],
  },
};

export default nextConfig;
