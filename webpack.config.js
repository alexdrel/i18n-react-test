var webpack = require("webpack");

module.exports = {
  entry: {
    "index": "./index.tsx",
  },
  output: {
    filename: "[name].js",
  },
  resolve: {
    extensions: [ '.js', '.tsx'],
    modules: [  __dirname +'/node_modules' ],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
