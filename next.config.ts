import { ERoute, ROUTES } from "@/routes";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: `${ROUTES[ERoute.Home]}`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
