import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import lenis from "astro-lenis";

// https://astro.build/config
export default defineConfig({
  site: "https://staging.hackcanada.org", // Used to generate your sitemap and canonical URLs.
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    lenis(),
  ],
});
