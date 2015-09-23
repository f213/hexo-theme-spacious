var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('csslint', function(){
     return gulp.src('source/css/**/*.styl')
        .pipe($.stylint({failOnError: true}));
});

gulp.task('jshint', function(){
    return gulp.src(['source/js/**/*.js', '!source/js/vendor/**/*', '!source/js/likely.js', 'test/*.js'])
        .pipe($.jshint())
        .pipe($.jshint.reporter('default'))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('test', ['csslint', 'jshint'], function(){
    return gulp.src('test/*.js')
        .pipe($.mocha({
            timeout:    8000
        }));
});