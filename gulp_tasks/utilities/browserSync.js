var browserSync = require('browser-sync');

module.exports = function (gulp, $) {
  'use strict';
  return function() {
    browserSync.init(['dist/index.html', 'dist/assets/stylesheet/**/*.css', 'dist/assets/javascript/**/*.js'], {
      open: 'external',
      server: {
        baseDir: './dist/',
      },

    });

  };

};
