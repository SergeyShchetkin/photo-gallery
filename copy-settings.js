var path = require('path');
var build_config = require('./build.config');

module.exports = {

  html_files: {
    "source": path.join(__dirname, build_config.src),
    "files": [
      'index.html'
    ],
    "destination": [path.join(__dirname, build_config.compile_dir), path.join(__dirname,build_config.build_dir)]
  },

  js_files: {
    "source": path.join(__dirname, build_config.src, '/js'),
    "files": [
      'app.js',
      'styles.js'
    ],
    "destination": [path.join(__dirname, build_config.build_dir, '/js')]
  },

  jsx_files: {
    "source": path.join(__dirname, build_config.src, '/jsx'),
    "files": [
      'toolbar.jsx'
    ],
    "destination": [path.join(__dirname, build_config.build_dir, '/jsx')]
  },

  styles: {
    "source": path.join(__dirname, build_config.src, '/styles'),
    "files": [
      'theme.less'
    ],
    "destination": [path.join(__dirname, build_config.build_dir, '/styles')]
  }

};