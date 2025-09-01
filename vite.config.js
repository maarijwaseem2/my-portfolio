import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
    sourcemap: true, // Enable source maps for easier debugging
    chunkSizeWarningLimit: 1000 // default is 500
  },
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to your Express server during development
      "/submit-analysis": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    "process.env.API_URL": JSON.stringify(
      process.env.NODE_ENV === "production"
        ? "http://localhost:3000"
        : "http://localhost:5000"
    ),
  },
});
