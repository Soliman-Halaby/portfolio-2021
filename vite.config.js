// vite.config.js
const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        gtavm: resolve(__dirname, "./project/gtavm.html"),
        about: resolve(__dirname, "about.html"),
      },
    },
  },
});
