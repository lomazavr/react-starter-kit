const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: Path.resolve(__dirname, "../src/scripts/index.jsx"),
  },
  output: {
    path: Path.join(__dirname, "../build"),
    filename: "js/[name].js",
    assetModuleFilename: "static/media/[name].[hash][ext]",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: Path.resolve(__dirname, "../public/"),
          globOptions: { ignore: ["**/*.html"] },
          to: "",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  resolve: {
    alias: {
      "~": Path.resolve(__dirname, "../src"),
    },
    extensions: ["*", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: false,
        },
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        type: "asset",
      },
      {
        test: /\.svg$/i,
        type: "asset",
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.(js|jsx)?$/,
        resourceQuery: { not: [/url/] },
        use: ["@svgr/webpack"],
      },
    ],
  },
};
