import { ERoute, ROUTES } from "@/routes";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
