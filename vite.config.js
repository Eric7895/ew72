import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration for GitHub Pages deployment.
export default defineConfig({
  plugins: [react()],
  base: "/ew72/",
});