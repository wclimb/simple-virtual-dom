const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    app: "./src/main.js"
  },
  plugins: [new HtmlWebpackPlugin({ template: "index.html" })]
};
