// if we want that main.js file make with different name then require path
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //   mode: "development" or mode: "none", (both do same work)
  //    that will create a long file and usually takes longer time compare to normal file because it creates a such a main.js file that has easy to read code.

  mode: "production",

  //o.k if in src folder file name is index.js but if in src folder index.js file is change then
  entry: "./src/app.js",

  //if we want that main.js file make with different name then after requiring path do this.
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "ayaz.js",
  },

  //imitilize webpack server
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
  },

  // this is to load css
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  //for html (give html responsibilty to webpack)
  plugins: [
    new HtmlWebpackPlugin({
      //set desire name of output file
      filename: "ayaz.html",
      template: "./src/index.html",
    }),
  ],
};
