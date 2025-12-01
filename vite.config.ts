import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

// Plugin to exclude external MFE modules from Vite's resolution
const externalMfePlugin: Plugin = {
  name: "external-mfe",
  resolveId(id: string) {
    if (id === "@org/child-mfe") {
      return { id, external: true };
    }
  },
};

export default defineConfig({
  plugins: [externalMfePlugin, react()],

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
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
