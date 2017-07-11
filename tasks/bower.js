const gulp = require('gulp')


gulp.task('bower',() => {
    return gulp.src('./src/bower_components/**/*.*')
      .pipe(gulp.dest('./dist/bower_components/'))
})
