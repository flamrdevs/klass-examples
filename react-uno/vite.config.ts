import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import unocss from "unocss/vite";

export default defineConfig({
  plugins: [unocss(), react()],
  resolve: { alias: { "~": path.resolve(__dirname, "src") } },
});
