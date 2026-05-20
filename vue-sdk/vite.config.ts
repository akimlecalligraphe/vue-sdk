import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ["src/**/*.ts", "src/**/*.vue"],
      outDir: "dist",
      insertTypesEntry: true,
    }),
  ],
  build: {
    cssCodeSplit: false,   // ← ajoute cette ligne
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VueSdk",
      fileName: "vue-sdk",
    },
    rollupOptions: {
      external: ["vue", "chart.js", "vue-chartjs", "@iconify/vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
          "chart.js": "Chart",
          "vue-chartjs": "VueChartjs",
          "@iconify/vue": "IconifyVue",
        },
      },
    },
  },
});