const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const sourceMap = require('gulp-sourcemaps')
const htmlReplace = require('gulp-html-replace')
const del = require('del')
const imagemin = require('gulp-imagemin')
const browserSync = require('browser-sync')


gulp.task('copy-image' , ()=>{
    return gulp.src(['./src/assets/images/**/*'])
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/images'))
})

gulp.task('copy-html' ,  ()=>{
    return gulp.src(['./src/*.html' ])
        .pipe(htmlReplace({
            'css' : 'css/main.css',
            'js' : 'js/main.js',
            'vue' : 'js/vue.js',
        }))
        .pipe(gulp.dest('./dist'))
})

gulp.task('compile-css' , ()=>{
   return gulp.src(['./src/assets/css/bootstrap.css' , './src/assets/css/main.css'  ])
        .pipe(sourceMap.init())
        .pipe(concat('main.css'))
        .pipe(sourceMap.write('/'))
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('compile-vue' , ()=>{
    return gulp.src(['./src/assets/js/axios.js', './src/assets/js/vue.js'])
        .pipe(sourceMap.init())
        .pipe(uglify())
        .pipe(concat('vue.js'))
        .pipe(sourceMap.write('/'))
        .pipe(gulp.dest('./dist/js'))
})

gulp.task('compile-js'  , ()=>{
     return gulp.src(['./src/assets/js/jquery.js' , './src/assets/js/popper.js' , './src/assets/js/bstp.min.js' , './src/assets/multislider/multislider.js' ])
        .pipe(sourceMap.init())
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(sourceMap.write('/'))
        .pipe(gulp.dest('./dist/js'))
})

gulp.task('delete'  , gulp.series(gulp.parallel([ 'copy-image' ,'copy-html' , 'compile-js', 'compile-vue' , 'compile-css'])) ,()=>{
    return del('./dist')
})

gulp.task('build' , gulp.series(['delete']), ()=>{})



gulp.task('compile-scss' , ()=>{
    return gulp.src(['./src/assets/scss/*.scss'])
        .pipe(sourceMap.init())
        .pipe(sass())
        .pipe(cssmin())
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(sourceMap.write('/'))
        .pipe(gulp.dest(['./src/assets/css']))
})

gulp.task('watching' , ()=>{
    gulp.watch(['./src/assets/scss/*.scss'] , gulp.series(['compile-scss']) )
})

gulp.task('server' , ()=>{
    browserSync.init({
        server : {
            baseDir : './src', // O mesmo que http://localhost:3000 ou
            // proxy : 'http://localhost:3000', // caso queira usar o gulp em conjunto a outro serv
        },

        port : process.env.PORT || 3000
    })
    gulp.watch('src/**/*').on('change' , browserSync.reload ) // Responsável pelo live reload da página
})

gulp.task('default' , gulp.series(gulp.parallel(['server' , 'watching'])))