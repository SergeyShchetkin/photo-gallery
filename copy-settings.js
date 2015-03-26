var path = require('path');
var build_config = require('./build.config');

module.exports = {

  html_files: {
    "source": path.join(__dirname, build_config.src),
    "files": [
      'index.html'
    ],
    "destination": path.join(__dirname, build_config.compile_dir)
  }
};