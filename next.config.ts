import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 keeps project screenshots crisp in the portfolio section
    qualities: [75, 90],
  },
};

export default nextConfig;
