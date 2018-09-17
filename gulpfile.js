var gulp = require ('gulp');
var rename = require ('gulp-rename');
var sass = require ('gulp-sass');
var imagemin = require ('gulp-imagemin');
var htmlmin = require ('gulp-htmlmin');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


gulp.task('serve', ['sass','mincss','minify', 'imagemin'], function() {

    browserSync.init({
        server: "dist"
    });

    gulp.watch('./src/sass/*.scss', ['sass']).on('change', reload);
    gulp.watch('./src/sass/components/*.scss', ['sass']).on('change', reload);
    gulp.watch('./dist/index.html').on('change', reload);
    gulp.watch('./src/css/main.css').on('change', reload);
    gulp.watch('./src/index.html', ['minify']).on('change', reload);
});


gulp.task('sass', function() {
    gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./src/css/'))
        .pipe(gulp.dest('./dist/css/'))

        .pipe(reload({stream: true}));
});

gulp.task('mincss', function(){
    gulp.src('./src/css/main.css')
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('minify', () => {
    gulp.src('src/index.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'))
  });

gulp.task('imagemin', () =>
    gulp.src('./src/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./dist/images'))
);


gulp.task('default', ['serve']);