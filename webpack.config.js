const path = require("path");

module.exports = {
  //output location of webpack bundle - file called index.bundle.js
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },
  //updating on localhost:3010
  devServer: {
    port: 3010,
  },
  //for compiling using module property
  module: {
    rules: [
      {
        //RegEx for js and jsx files $ -> only match at end of file name
        test: /\.(js|jsx)$/,
        //exclude looking in the node modules file
        exclude: /node_modules/,
        //use loader when file located
        use: {
          loader: "babel-loader",
        },
      },
      {
        //to handle sass files
        //RegEx for SASS
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
