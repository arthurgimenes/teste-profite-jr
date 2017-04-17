const gulp = require('gulp')
      sass = require('gulp-sass'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      pump = require('pump'),
      imagemin = require('gulp-imagemin'),
      watch = require('gulp-watch'),
      notify = require("gulp-notify"),
      autoprefixer = require('gulp-autoprefixer'),
      assets = "assets/src/";

gulp.task('default', ['sass','js','image']);

gulp.task('sass', function (cb) {
 pump([
    gulp.src([assets+'css/*.css', assets+'sass/*.scss']),
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }),
      concat('main.min.css'),
      sass({outputStyle: 'compressed'}).on('error', sass.logError),
      gulp.dest('public/css'),
      notify("É Hora do Show Porra!")
    ],
    cb
  );
});

gulp.task('js', function (cb) {
  pump([
        gulp.src([assets+'js/lib/*.js', assets+'js/*.js']),
        concat('main.min.js'),
        uglify(),
        gulp.dest('public/js'),
        notify("É Hora do Show Porra!")
    ],
    cb
  );
});

gulp.task('image', function (cb) {
  pump([
        gulp.src(assets+'img/*'),
        imagemin(),
        gulp.dest('public/img'),
        notify("É Hora do Show Porra!")
    ],
    cb
  );
});

gulp.task('watch', function (cb) {
        gulp.watch([assets + 'css/*.css',  assets+'sass/**/*.scss'], ['sass']);
        gulp.watch([assets+'js/lib/*.js', assets+'js/*.js'],['js']);
});
