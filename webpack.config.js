const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    loaders: [
        {
            test: /.scss$/,
            use: ExtractTextPlugin.extract({fallback: 'style-loader',
                use: ["css-loader", "sass-loader"]
            })
        },
        {
          test: /\.jsx?$/,
          include: path.join(__dirname, '/client/src'),
          loader: 'babel',
          query: {
              presets: ["react", "es2015"]
          }
        }
    ],
  },
  plugins: [
      new ExtractTextPlugin("styles.css"),
      new HtmlWebpackPlugin({
          title: 'FPGame',
          template: './template.html',
          filename: '../index.html',
      })
  ],

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true,
  devtool: 'cheap-eval-source-map'
};