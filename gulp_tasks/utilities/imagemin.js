var imagemin = require('gulp-imagemin');

module.exports = function(gulp, $) {
  'use strict';

  return function() {
    gulp.src('./src/assets/images/**/*')
        .pipe(imagemin({
          optimizationLevel: 3,
          progressive: true,
          interlaced: true
        }))

      .pipe(gulp.dest('./dist/assets/images/'));

  };

};
