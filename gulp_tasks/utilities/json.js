module.exports = function (gulp, $) {
  'use strict';

  return function() {
    gulp.src('./src/assets/javascript/json/*.json')
        .pipe(gulp.dest('./dist/assets/javascript/json/'));

    };

};
