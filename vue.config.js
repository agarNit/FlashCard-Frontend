const { InjectManifest } = require("workbox-webpack-plugin")
const config = {}
if (process.env.NODE_ENV === "production") {
  config["configureWebpack"] = {
    plugins: [
      new InjectManifest({
        swSrc: "./sw.js",
      }),
    ],
  }
}

module.exports = config