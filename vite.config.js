// vite.config.js
const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        gtavm: resolve(__dirname, "gtavm.html"),
        selfer: resolve(__dirname, "selfer.html"),
        moviereact: resolve(__dirname, "moviereact.html"),
        canlinkme: resolve(__dirname, "canlinkme.html"),
        ddalos: resolve(__dirname, "ddalos.html"),
        savoir: resolve(__dirname, "savoir.html"),
        eclipse: resolve(__dirname, "eclipse.html"),
        about: resolve(__dirname, "about.html"),
      },
    },
  },
});

// {
//   "cleanUrls": true
// }
