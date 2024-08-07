import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: "jsdom",
    reporters: ['json', 'verbose', 'vitest-sonar-reporter'],
    outputFile: {
        json: 'my-json-report.json',
        'vitest-sonar-reporter': 'sonar-report.xml',
    },
    coverage: {
        reporters: 'lcov',
    },
  },
   root: ".", //Define the root,
   passWithNoTests: true
});