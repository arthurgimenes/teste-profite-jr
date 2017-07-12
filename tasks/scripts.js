const gulp        = require('gulp')

gulp.task('scripts',() => {
    return gulp.src('./src/scripts/**/*.js')
      .pipe(gulp.dest('./dist/scripts'))
})
