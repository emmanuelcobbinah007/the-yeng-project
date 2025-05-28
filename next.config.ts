import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: true,
    serverComponents: true,
  },
};

export default nextConfig;
