const webpack = require("webpack");
const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const nodeEnv = process.env.NODE_ENV || "development";
const isProd = nodeEnv === "production";

module.exports = {
  devtool: isProd ? "hidden-source-map" : "cheap-eval-source-map",
  context: path.join(__dirname, "./lib"),
  entry: {
    js: "./index.js",
    vendor: ["react"]
  },
  output: {
    path: path.join(__dirname, "./build"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      //{
      //  test: /\.html$/,
      //  loader: "file",
      //  query: {
      //    name: "[name].[ext]"
      //  }
      //},
      {
        test: /\.sass/,
        loaders: [
          "style",
          "css",
          "sass"
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
            presets: ["es2015", "react"],
            plugins: ["transform-object-rest-spread"]
        }
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    modules: [
      path.resolve("./lib"),
      "node_modules"
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
      filename: "vendor.bundle.js"
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html"
    }),
  ],
  devServer: {
    hot: true,
    contentBase: "./build"
  }
};
