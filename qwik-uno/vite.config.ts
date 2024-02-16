import path from "path";

import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";

import unocss from "unocss/vite";

export default defineConfig({
  plugins: [unocss(), qwikVite({ csr: true })],
  resolve: { alias: { "~": path.resolve(__dirname, "src") } },
});
