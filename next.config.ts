import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Default next/image optimization needs a server; static export serves files as-is.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
