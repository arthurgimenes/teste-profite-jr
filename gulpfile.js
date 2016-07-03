// Gulp Modules
// ===========================================
var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    arg     = require('minimist')(process.argv.slice(2)),
    gulpif  = require('gulp-if');

// Task path
// ==========================================
var TASK_PATH      = './gulp_tasks/';
var TASKS_PATH     = TASK_PATH + 'development/';
var UTILITIES_PATH = TASK_PATH + 'utilities/';

// Initialize modules
// ===========================================
function getTask (task) {
  return require(task)(gulp, plugins);
}

// Modules Tasks
// ===========================================
gulp.task('jade',       getTask(TASKS_PATH + 'jade'));
gulp.task('stylesheet', getTask(TASKS_PATH + 'stylesheet'));
gulp.task('javascript', getTask(TASKS_PATH + 'javascript'));

// Modules Utilities
// ===========================================
gulp.task('browserSync', getTask(UTILITIES_PATH + 'browserSync'));
gulp.task('imagemin',    getTask(UTILITIES_PATH + 'imagemin'));
gulp.task('svgSprite',   getTask(UTILITIES_PATH + 'svgSprite'));
gulp.task('cacheBust',   getTask(UTILITIES_PATH + 'cacheBust'));
gulp.task('json',        getTask(UTILITIES_PATH + 'json'));

// Watch
// ===========================================
gulp.task('watch', function () {
  gulp.watch(['src/templates/index.jade', 'src/templates/**/!(_)*.jade'], ['jade']); //- [!()_*] ignore files in folder and not compile
  gulp.watch('src/**/*.scss', ['stylesheet']);
  gulp.watch('src/**/*.js',   ['javascript']);
  gulp.watch('src/**/*.jade', ['jade']);

});

// Task
// ===========================================
gulp.task('default', ['browserSync', 'watch', 'stylesheet', 'javascript', 'jade', 'json']);

//- Build
gulp.task('build', ['jade','stylesheet', 'javascript', 'svgSprite', 'imagemin', 'cacheBust', 'json']);
