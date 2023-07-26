import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://nus3.github.io/",
  base: "/astro-labs",
  experimental: {
    viewTransitions: true,
  },
});
