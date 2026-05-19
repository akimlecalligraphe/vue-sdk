import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";  // ← ajoute cet import
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    dts({                            // ← ajoute ce plugin
      include: ["src/**/*.ts", "src/**/*.vue"],
      outDir: "dist",
      insertTypesEntry: true,        // génère un index.d.ts à la racine de dist/
    }),
  ],
  build: {
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