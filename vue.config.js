const { InjectManifest } = require("workbox-webpack-plugin")
const config = {}
if (process.env.NODE_ENV === "development") {
  config["configureWebpack"] = {
    plugins: [
      new InjectManifest({
        swSrc: "./sw.js",
      }),
    ],
  }
}

module.exports = config