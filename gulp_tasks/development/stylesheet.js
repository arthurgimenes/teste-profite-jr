var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var rename       = require('gulp-rename');
var env          = require('minimist')(process.argv.slice(2));
var gulpif  = require('gulp-if');

module.exports = function (gulp, $) {
  'use strict';
  /**
    - Compress, prefix and rename file to '.min.css' */
  return function() {
    gulp.src(['./src/assets/stylesheet/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['last 2 versions', '> 5%', 'Firefox ESR'] }))
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulpif(env.prod, sass({outputStyle: 'compressed' })))
        .pipe(gulpif(env.prod, rename('application.min.css')))
        .pipe(gulp.dest('./dist/assets/stylesheet/'));

      };

};
