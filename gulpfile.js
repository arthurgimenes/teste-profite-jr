var gulp = require('gulp'),
	util = require('gulp-util'),
	sass = require('gulp-sass'),
	minifycss=require('gulp-minify-css'),
	postcss=require('gulp-postcss'),
	rename=require('gulp-rename'),
	minijs=require('gulp-uglify'),
	jshint=require('gulp-jshint'),
	refresh=require('gulp-livereload'),
	minhtml =require('gulp-htmlmin'),
	datauri=require('gulp-image-data-uri'),
	prefix=require('autoprefixer');

gulp.task('getdatauri',function(){
	gulp.src('build/image/*/*{png,jpg}')
		.pipe(datauri())
		.pipe(minifycss())
		.pipe(gulp.dest('build/imageUri'));
});

gulp.task('formatCss',function(){
	refresh.listen();
	return gulp.src('assets/sass/main*scss')
			   .pipe(sass())
			   .pipe(postcss([prefix({
                    browsers: [
                         '> 0%'
                    ]})]))
			   .pipe(minifycss())
   			   .pipe(rename('profite.min.css'))
			   .pipe(gulp.dest('build/css'))
			   .pipe(refresh());
});

gulp.task('formatJs',function(){
	refresh.listen();
    return gulp.src('assets/scripts/*js')
    		   .pipe(jshint())
    		   .pipe(jshint.reporter())
			   .pipe(minijs())
    		   .pipe(rename('script.min.js'))
    		   .pipe(gulp.dest('build/js'))
    		   .pipe(refresh());	
});

gulp.task('formatHtml',function(){
	refresh.listen();
	return gulp.src('assets/*html')
		  .pipe(minhtml({collapseWhitespace: true}))
		  .pipe(gulp.dest('build'))
		  .pipe(refresh());
});

gulp.task('main',function(){
	gulp.watch('assets/**/*.{sass,scss}',['formatCss']);
	gulp.watch('assets/**/*.js',['formatJs']);
	gulp.watch('assets/*html',['formatHtml']);
});