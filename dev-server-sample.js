var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var devServer = new WebpackDevServer(
  webpack(config),
  {
    contentBase: path.join(__dirname, 'build'),
    publicPath: '/assets/'
  }
).listen(7997, 'localhost');