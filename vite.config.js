import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/confi/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "178.128.174.197",
    port: "8003",
  },
});