import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["puppeteer-core", "@sparticuz/chromium"],
  images: {
    domains: ["mesplansdepermis.fr"],
  },
};

export default nextConfig;
