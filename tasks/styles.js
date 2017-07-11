
const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('styles', () => {
  return gulp.src('./src/styles/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/styles/'))
});
