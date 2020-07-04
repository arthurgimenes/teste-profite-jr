var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require('gulp-concat');

//default gulp
gulp.task('default', ['sass', 'watch', 'browser-sync']);

//Sass
gulp.task('sass', function () {
  return gulp.src('assets/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({stream:true}));
  });

//browserSync
gulp.task('browser-sync', ['sass'], function() {

  browserSync.init({
    server: "."
  });

  gulp.watch("assets/sass/**/*.scss", ['sass']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

//Watch
gulp.task('watch', function () {
  gulp.watch('assets/sass/**/*.scss',['sass']);
});