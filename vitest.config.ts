import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    globals: true,
    css: true,
    exclude: ["node_modules/**", "e2e/**", ".next/**"],
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        ".next/",
        "coverage/",
        "*.config.*",
        "**/*.d.ts",
        "**/types/*",
        "e2e/**",
        "src/utils",
        "src/app/api",
        "src/app/providers.tsx",
      ],
    },
  },
});
