import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./src/assets"),
      components: path.resolve(__dirname, "./src/components"),
      utils: path.resolve(__dirname, "./src/utils"),
      layouts: path.resolve(__dirname, "./src/layouts"),
      providers: path.resolve(__dirname, "./src/providers"),
      views: path.resolve(__dirname, "./src/views"),
    },
  },
  server: {
    port: 3000,
  },
});
