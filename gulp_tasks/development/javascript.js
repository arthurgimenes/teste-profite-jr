var jshint  = require('gulp-jshint');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');
var env     = require('minimist')(process.argv.slice(2));
var gulpif  = require('gulp-if');

module.exports = function (gulp, $) {
  'use strict';

  return function() {
    gulp.src(['./src/assets/javascript/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulpif(env.prod, uglify()))
        .pipe(gulpif(env.prod, rename('script.min.js')))
        .pipe(gulp.dest('./dist/assets/javascript/'));

  };

};
