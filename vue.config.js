const { defineConfig } = require('@vue/cli-service')
const webpack = require("webpack");
const fs = require("fs");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "localhost",
    port: 1339,
    server: 'https',
    https: {
      key: fs.readFileSync("dev_server/key.pem"),
      cert: fs.readFileSync("dev_server/cert.pem")
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        moment: "moment"
      })
    ]
  },
  pages: {
    index: {
      entry: "src/main.js",
      title: "МИНИСТЕРСТВО ЭКОНОМИЧЕСКОГО РАЗВИТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ"
    }
  }
})
