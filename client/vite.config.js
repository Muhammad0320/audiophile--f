import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

import { AutoImport } from "unplugin-auto-import";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "127.0.0.1",
  },
  plugins: [
    react(),
    eslint(),
    AutoImport({
      imports: [
        "react",
        "react-dom",
        "react-router-dom",
        "react-navigation",
        // other libraries you want to auto import
      ],
      dts: "src/auto-imports.d.ts",
    }),
  ],

  resolve: {
    alias: {
      src: "/src",
    },
  },
});
