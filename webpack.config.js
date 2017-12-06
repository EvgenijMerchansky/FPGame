const path = require('path');
const extractSass = require('sass-extract');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/app.jsx'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },

  module: {

    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      loader: 'babel',
      query: {
        presets: ["react", "es2015"]
      }
    }],

  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'FPGame',
          filename: '../index.html'
      })
  ],

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};
