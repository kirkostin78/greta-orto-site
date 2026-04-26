// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const SITE = "https://greta-orto.ru";

export default defineConfig({
  site: SITE,
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    mdx(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "viewport",
  },
});
