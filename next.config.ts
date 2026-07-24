import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // All artwork ships locally as SVG/inline vector art, so only the local
    // loader is needed. Formats stay declared for any future raster assets.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 810, 1024, 1280, 1440, 1920],
  },
  experimental: {
    optimizePackageImports: ["motion"],
  },
};

export default nextConfig;
