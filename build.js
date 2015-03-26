var path = require('path');
var webpack = require('webpack');
var fs = require('fs-extra');
var config = require('./webpack.config');
var copySettings = require('./copy-settings');

copyFiles(copySettings.html_files);
copyFiles(copySettings.js_files);
copyFiles(copySettings.jsx_files);
copyFiles(copySettings.styles);

var compiler = webpack(config);
compiler.run(function (err, stats) {
  console.log(stats.toJson());
});

function copyFiles (data) {
  if (data.source && data.destination && data.files) {
    for (var i = 0; i < data.files.length; i++) {
      for (var j = 0; j < data.destination.length; j++) {
        fs.copy(path.join(data.source, '/', data.files[i]), path.join(data.destination[j], '/', data.files[i]), function (err) {
          if (err) {
            return console.error(err);
          }
        });
        console.log('File ' + data.files[i] + ' copied successfully for directory ' + data.destination[j] + '!');
      }
    }
  }
};