var path = require('path');
var webpack = require('webpack');
var fs = require('fs-extra');
var config = require('./webpack.config');
var copySettings = require('./copy-settings');

var copyFiles = function (data) {
  if (data.source && data.destination && data.files) {
    for (var i = 0; i < data.files.length; i++) {
      fs.copy(path.join(data.source, '/', data.files[i]), path.join(data.destination, '/', data.files[i]), function (err) {
        if (err) {
          return console.error(err);
        }
      });
      console.log('File ' + data.files[i] + ' copied successfully!');
    }
  }
};

copyFiles(copySettings.html_files);

var compiler = webpack(config);
compiler.run(function (err, stats) {
  console.log(stats.toJson());
});