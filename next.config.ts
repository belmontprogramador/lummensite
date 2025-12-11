import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "botgrupo.lummen-app.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
