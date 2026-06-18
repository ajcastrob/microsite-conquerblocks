import { defineConfig } from "vite";
import { resolve } from "path";
import { standardCssModules } from "vite-plugin-standard-css-modules";

export default defineConfig({
  root: "src",
  base: "/microsite-conquerblocks/",
  publicDir: "../public",
  plugins: [standardCssModules()],
  server: { port: 1234 },
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        somos: resolve(__dirname, "src/pages/somos.html"),
        cursos: resolve(__dirname, "src/pages/cursos.html"),
        blog: resolve(__dirname, "src/pages/blog.html"),
        registro: resolve(__dirname, "src/pages/registro.html"),
      },
    },
  },
  css: {
    transformer: "lightningcss",
    lightningcss: {
      drafts: {
        customMedia: true,
      },
    },
  },
});
