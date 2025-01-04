import { ERoute, ROUTES } from "@/routes";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: `/${ROUTES[ERoute.Home]}`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
