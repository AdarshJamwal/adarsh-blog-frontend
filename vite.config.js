import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/webhooks": {
        target: "http://localhost:3000", // Backend for webhooks
        changeOrigin: true,
        secure: false,
      },
    },
  },
});