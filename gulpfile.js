// gulpfile.js

/* * * * * * * * *
 *  DEV PATH     *
 * * * * * * * * */
 
var gulp 		= require('gulp'),
	uglify 		= require('gulp-uglify'),
	livereload 	= require('gulp-livereload'),
	imagemin 	= require('gulp-imagemin'),
	sass 		= require('gulp-sass'),
	header 		= require('gulp-header'),
	jshint		= require('gulp-jshint'),
	pkg			= require('./package.json');
	


/* * * * * * * * *
 *  DEV PATH     *
 * * * * * * * * */
var paths = {
	scripts	: 'public/dev/assets/js/**/*.js',
	images	: 'public/dev/assets/img/**/*',
	sass	: 'public/dev/assets/scss/**/*.scss',
	html	: './index.html'
};
/* * * * * * * * *
 *  DIST PATH    *
 * * * * * * * * */
var dest_paths ={
	scripts	: 'public/dist/assets/js',
	images	: 'public/dist/assets/img',
	sass	: 'public/dist/assets/css'
};


var banner = ['/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *',
  ' * <%= pkg.name %>',
  ' * Last Update: <%= new Date() %> ',
  ' * @author <%= pkg.author %>',  
  ' * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */',
  ''].join('\n');



// gulp.task('default', function() {
//   return gulp.src('src/styles/*.styl')
//     .pipe(stylus())
//     .pipe(autoprefixer())
//     .pipe(gulp.dest('public/styles'));
// });

/* * * * * * * * *
 *  TASKS        *
 * * * * * * * * */
gulp.task('scripts', function() {
	gulp.src(paths.scripts)
		.pipe(uglify())
		.pipe(header(banner, { pkg : pkg } ))
		.pipe(gulp.dest(dest_paths.scripts))
		.pipe(livereload())
});

gulp.task('images', function () {
	return gulp.src(paths.images)
			.pipe(imagemin())
			.pipe(gulp.dest(dest_paths.images));
});

gulp.task('html', function () {
	return gulp.src(paths.html)
			.pipe(livereload())
});


gulp.task('sass', function () {
    gulp.src(paths.sass)
    	.pipe(sass({ outputStyle: 'compressed' })) //compress sass and build css
    	.pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest(dest_paths.sass))
        .pipe(livereload())
});

gulp.task('hintjs', function () {
    return gulp.src(paths.scripts)
        .pipe(jshint(
{
	// "node": true,
	// "esnext": true,
	// "bitwise": true,
	// "camelcase": true,
	// "curly": true,
	// "immed": true,
	// "newcap": true,
	// "noarg": true,
	// "undef": true,
	// "unused": "vars",
	// "strict": true,
	"-W041": true, //ignora === y !===
	laxbreak: true,
	elision: true, //te avisa si dejas elementos en blanco. ej#[1, , , 4, , , 7]
	moz: true,
	eqnull: true,
}))
        .pipe(jshint.reporter('jshint-stylish'));
});

/* * * * * * * * *
 *  WATCH        *
 * * * * * * * * */
gulp.task('watch',function(){
	// gulp.watch('src/**/*.js', ['test', 'compile']);
	livereload.listen();
	gulp.watch( paths.scripts , ['scripts' , 'hintjs']);
	gulp.watch( paths.images  , ['images']);
	gulp.watch( paths.html	  , ['html'	 ]);
	gulp.watch( paths.sass	  , ['sass'	 ]);
});

/* * * * * * * * *
 *  DEFAULT TASK *
 * * * * * * * * */
gulp.task('default', ['watch', 'scripts', 'images', 'sass', 'hintjs']);


/* * * * * * * * *
 *	SRC          *
 * * * * * * * * */
// gulp.src(['src/**/*.js', 'test/spec/**/*.js']); //Returns a readable stream

/* * * * * * * * *
 *	DESTINATION  *
 * * * * * * * * */
// gulp.src('src') 
//   .pipe(...)
//   .pipe(gulp.dest('dist'));


/* * * * * * * * *
 *	TASK		  *
 * * * * * * * * */


// gulp.task('name', ['deps'], function(done) {

//   return stream || promise;
//   // ...or, call done()
	
// });