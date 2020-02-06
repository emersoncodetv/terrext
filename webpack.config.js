const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  stats: {
    // Ignore warnings due to yarg's dynamic module loading
    warningsFilter: [/node_modules\/yargs/]
  },
  target: "node",
  plugins: [
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true })
  ],
  resolve: {
    alias: {
      "@dummydata": path.resolve(__dirname, "__dummydata__/"),
      "@terraform": path.resolve(__dirname, "src/terraform/"),
      "@fs-access": path.resolve(__dirname, "src/fs-access/"),
      "@mocks": path.resolve(__dirname, "__mocks__/"),
      "@commands": path.resolve(__dirname, "src/commands/"),
      "@providers": path.resolve(__dirname, "src/providers/")
    }
  }
};
