import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/confi/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "10.0.60.125",
    port: "8003",
  },
});