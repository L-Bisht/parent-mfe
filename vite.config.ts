// vite.config.ts (parent-mfe)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginSingleSpa from "vite-plugin-single-spa";

export default defineConfig({
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: "root",
      // you can omit this if you’re using the default names:
      // src/importMap.dev.json and src/importMap.json
      importMaps: {
        dev: "src/importMap.dev.json",
        build: "src/importMap.prod.json",
      },
      imo: "4.2.0",
    }),
  ],

  // optional but nice: don't even *try* to pre-bundle the remote MFE
  optimizeDeps: {
    exclude: ["@org/child-mfe"],
  },

  build: {
    rollupOptions: {
      external: ["@org/child-mfe"],
    },
  },

  server: {
    port: 9000,
  },
});
