const Dotenv = require("dotenv-webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
const Path = require("path");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const StylelintPlugin = require("stylelint-webpack-plugin");
const Webpack = require("webpack");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  target: "web",
  mode: "development",
  devtool: "eval-cheap-source-map",
  output: {
    chunkFilename: "js/[name].chunk.js",
  },
  devServer: {
    client: {
      logging: "error",
    },
    open: ["/"],
    hot: true,
    port: "auto",
  },
  plugins: [
    new Dotenv({ path: "./.env.dev" }),
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    new ESLintPlugin({
      extensions: "js",
      emitWarning: true,
      files: Path.resolve(__dirname, "../src"),
    }),
    new StylelintPlugin({
      files: Path.join("src", "**/*.s?(a|c)ss"),
    }),
    new ReactRefreshWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: Path.resolve(__dirname, "../src"),
        loader: "babel-loader",
        options: {
          plugins: [require.resolve("react-refresh/babel")].filter(Boolean),
        }
      },
      {
        test: /\.s?css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
});
