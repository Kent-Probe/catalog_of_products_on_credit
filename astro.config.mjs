// @ts-check
import { defineConfig } from "astro/config";

import path from "path";
import { fileURLToPath } from "url";

import vercel from "@astrojs/vercel/serverless";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  output: "server",
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
  adapter: vercel({}),
});
