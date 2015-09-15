var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');

var files = ['index.js', 'test/*.js', 'gulpfile.js'];

gulp.task('lint', function () {

	return gulp
		.src(files)
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'));
});

gulp.task('test', function () {
	return gulp
		.src('test/*.js', { read: false })
		.pipe(mocha());
});

gulp.task('default', ['lint', 'test']);
