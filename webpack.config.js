var webpack = require("webpack");

module.exports = {
  entry: {
    "index": "./index.tsx",
  },
  output: {
    filename: "[name].js",
  },
  resolve: {
    extensions: ['', '.js', '.tsx'],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts' }
    ]
  }
}
