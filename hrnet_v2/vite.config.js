import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {

  return {
    plugins: [react(), svgr()],
    build: {
      outDir: "../docs",
    },
  };
});
