const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './client/index.js',

  output: {
    path: './build',
    filename: 'client.bundle.js'
  },

  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      },
      {
        test: /\.(css|less)$/,
        loaders: ['style', 'css', 'less-loader']
      },
      {
        test: /\.(woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: 'file'
      },
      {
        test: /\.(jpe?g|png|gif|svg)(\?.*$|$)/i,
        loader:'file'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin([
      { from: './client/resources', to: 'resources' },
    ])
  ]
};