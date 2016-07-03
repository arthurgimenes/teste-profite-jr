var svgSprite = require('gulp-svg-sprite');

module.exports = function(gulp, $) {
  'use strict';

  return function() {
    var option = {
      mode: {
        symbol: {
          render: {
            css: true,
            scss: false
          },
          dest: 'icons',
          sprite: 'icons.svg',
        },
      },
      shape: {
        id: {
          separator: '-',
        }
      }
    };
    gulp.src('src/assets/images/*.svg')
      .pipe(svgSprite(option))
      .pipe(gulp.dest('dist/assets/images'));
  };
};
