const path = require("path");
const { version } = require("./package.json");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: `v${version}__bundle.js`,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "singletonStyleTag",
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                mode: "pure",
                localIdentName: "[name]_[local]_[hash:base64]",
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      styles: path.resolve(__dirname, "src/styles"),
      layouts: path.resolve(__dirname, "src/layouts"),
      hooks: path.resolve(__dirname, "src/hooks"),
      context: path.resolve(__dirname, "src/context"),
      mock: path.resolve(__dirname, "src/mock"),
    },
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
      title: "GitHub Users App",
      inject: "body",
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    port: 3030,
    historyApiFallback: true,
    hot: true,
  },
};
