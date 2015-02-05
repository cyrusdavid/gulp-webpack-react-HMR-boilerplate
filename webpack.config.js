'use strict'

var webpack = require('webpack')

var options = {
  cache: true,
  debug: true,
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/only-dev-server',
    './app/scripts/main.js',
    './app/styles/main.less'
  ],
  output: {
    path: __dirname + '/dist/assets/',
    publicPath: '/assets/',
    filename: '[name].js'
  },
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    loaders: [
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.jsx$/, loader: 'react-hot!jsx?harmony', exclude: /node_modules/ }
    ]
  },
  // recordsPath: __dirname + '/app/[hash].hot-update.json',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('init.js')
  ]
}

module.exports = options
