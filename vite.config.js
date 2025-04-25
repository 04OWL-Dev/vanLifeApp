import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { resolve } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react({ fastRefresh: false }),
    viteStaticCopy({
      targets: [
        {
          src: resolve(__dirname, "public"),
          dest: "",
        },
      ],
    }),
  ],
});
