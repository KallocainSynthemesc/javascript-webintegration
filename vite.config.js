import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "docs",
  },
  server: {
    // Increase the WebSocket reconnect delay to 5000 milliseconds (5 seconds)
    websocket: {
      reconnectTimeout: 5000,
    },
  },
  base: "/javascript-webintegration/",
});
