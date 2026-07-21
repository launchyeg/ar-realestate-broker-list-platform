import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tjwcefkkahkcxwljdbky.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      // Keep any existing patterns you already have
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
