import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";

import unocss from "unocss/vite";

export default defineConfig({
  plugins: [unocss(), vue(), jsx()],
  resolve: { alias: { "~": path.resolve(__dirname, "src") } },
});
