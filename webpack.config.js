var path = require('path');
var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var build_config = require('./build.config');

module.exports = {

  context: path.join(__dirname, build_config.src),
  entry: {
    "index": './js/app',
    "styles": './js/styles'
  },
  output: {
    path: path.join(__dirname, build_config.compile_dir),
    filename: build_config.js_file
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    modulesDirectories: [build_config.node_modules, build_config.bower_components]
  },
  cache: true,
  module: {
    loaders: [
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      },
      {test: /\.jsx$/, loader: 'jsx-loader'},
      {test: /\.css$/, loader: 'style-loader!styles-loader'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.hbs$/, loader: 'handlebars-loader'},
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(build_config.css_file),
    new BowerWebpackPlugin({
      modulesDirectories: [build_config.bower_components],
      manifestFiles: ['bower.json', '.bower.json'],
      includes: /.*/,
      excludes: /.*\.less$/
    }),
    new webpack.DefinePlugin({
      "NODE_ENV": JSON.stringify(build_config.node_env)
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
}
;
