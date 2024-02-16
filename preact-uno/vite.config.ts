import path from "path";

import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

import unocss from "unocss/vite";

export default defineConfig({
  plugins: [unocss(), preact()],
  resolve: { alias: { "~": path.resolve(__dirname, "src") } },
});
