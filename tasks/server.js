const gulp = require('gulp');
const browserSync = require('browser-sync').create()

gulp.task('browser-sync', () => {
     browserSync.init(["./dist/styles/*.css","./dist/images/**/*.*", "./dist/**/*.html", "./dist/scripts/**/*.js"], {
        server: {
            baseDir: "./dist"
        }
    })
})

gulp.task('server', ['bower','scripts','browser-sync','styles','html','images' ], () => {
    gulp.watch("./src/styles/**/*.scss", ['styles'])
    gulp.watch("./src/**/*.html", ['html'])
    gulp.watch("src/images/**/*.*", ['images'])
    gulp.watch("src/scripts/**/*.js", ['scripts'])
})
