const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');

gulp.task('sprite', () => {
  var spriteData = gulp.src('./src/images/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.scss',
    imgPath: '../images/sprite.png'

  }));
  spriteData.css.pipe(gulp.dest('./src/styles/structure/'));
  spriteData.img.pipe(gulp.dest('./src/images/'));

});

gulp.task('moveImg',() => {
    return gulp.src(['./src/images/**/*.*','!./src/images/sprite/**/*.*'])
      .pipe(gulp.dest('./dist/images/'))
})


gulp.task('images', ['sprite','moveImg'])
