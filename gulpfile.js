
var gulp = require('gulp'),
csso = require('gulp-csso'),
autoprefixer = require('gulp-autoprefixer'),
uglify = require('gulp-uglify'),
del = require('del'),
htmlmin = require('gulp-htmlmin');


// Set the browser that you want to support

const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];


// Gulp task to minify CSS files

gulp.task('styles', function () {
  return gulp.src('public/stylesheets/*.css')
  .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    // Minify the file
    .pipe(csso())
    // Output
    .pipe(gulp.dest('public/dist/css'))
});


// Gulp task to minify JS files

gulp.task('javascripts', function(){
  return gulp.src('public/javascripts/*.js')
  // Minify the file
  .pipe(uglify())
  // Output
  .pipe(gulp.dest('public/dist/js'))
});

// Gulp task to minify HTML files

gulp.task('html', function(){
  return gulp.src('views/*.handlebars')
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(gulp.dest('public/dist/html'))
})

gulp.task('production', gulp.series('styles', 'javascripts', 'html'))