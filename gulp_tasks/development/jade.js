var jade = require('gulp-jade');
var env  = require('minimist')(process.argv.slice(2));
var gulpif  = require('gulp-if');

module.exports = function (gulp, $) {
  'use strict';

  return function() {
    gulp.src('src/templates/index.jade')
        .pipe(jade({ pretty: !env.prod }))
        .on('error', function (error) { console.error('' + error);})
        .pipe(gulp.dest('./dist'));

  };

};
