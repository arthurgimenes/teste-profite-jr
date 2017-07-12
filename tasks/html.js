const gulp        = require('gulp')
const bowerFiles  = require('main-bower-files')
const inject      = require('gulp-inject')

gulp.task('html',() => {
    return gulp.src('./src/**/*.html')
      .pipe(inject(gulp.src(bowerFiles(), {read: false}), {addRootSlash:false,addPrefix:'.',name: 'bower',ignorePath: 'src'}))
      .pipe(gulp.dest('./dist'))
})
