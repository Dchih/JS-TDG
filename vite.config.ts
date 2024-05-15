/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: ["src/**/*.spec.ts"],
    environment: "node",
    globals: true,
  },
});
