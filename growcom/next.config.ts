import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/linkedin-form",
        destination: "/linkedin",
        permanent: false,
      },
      {
        source: "/reunion-linkedin",
        destination: "/linkedin",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
