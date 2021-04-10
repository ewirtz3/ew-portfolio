const path = require("path");
const HTMLplugin = require("html-webpack-plugin");

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ["style-loader", "css-loader"],
  },
  {
    test: /\.(gif|png|jpe?g|svg)$/i,
    exclude: /node_modules/,
    use: [
      "file-loader",
      {
        loader: "image-webpack-loader",
        options: {
          bypassOnDebug: true,
          disable: true,
        },
      },
    ],
  },
  {
    test: /\.pdf$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
];

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  module: { rules },
  plugins: [new HTMLplugin({ template: "./public/index.html" })],
};
