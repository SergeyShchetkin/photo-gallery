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
      'styles.js',
      'toolbar.jsx'
    ],
    "destination": [path.join(__dirname, build_config.build_dir, '/js')]
  },

  styles: {
    "source": path.join(__dirname, build_config.src, '/less'),
    "files": [
      'theme.less'
    ],
    "destination": [path.join(__dirname, build_config.build_dir, '/less')]
  }

};