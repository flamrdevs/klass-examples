import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), jsx()],
  resolve: { alias: { "~": path.resolve(__dirname, "src") } },
});
