import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { existsSync, readdirSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const ignoredRootDirs = new Set(["dist", "node_modules", "public", "src"]);

const routeInputs = Object.fromEntries(
  readdirSync(root)
    .filter((name) => {
      const fullPath = resolve(root, name);
      return (
        !ignoredRootDirs.has(name) &&
        statSync(fullPath).isDirectory() &&
        existsSync(resolve(fullPath, "index.html"))
      );
    })
    .map((name) => [name, resolve(root, name, "index.html")]),
);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        ...routeInputs,
      },
    },
  },
});
