const path = require("path");
const resolve = (pathName) => path.resolve(__dirname, pathName);
module.exports = {
  webpack: {
    alias: {
      "@": resolve("src")
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://codercba.com:1888/airbnb/api",
        pathRewrite: { "^/api": "" },
        // changeOrigin: true,
        secure: false
      }
    }
  }
};
