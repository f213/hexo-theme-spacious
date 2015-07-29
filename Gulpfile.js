var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('server',  $.shell.task('node_modules/hexo/bin/hexo server', {cwd: '../../'}));

gulp.task('csslint', function(){
     return gulp.src('source/css/**/*.styl')
        .pipe($.stylint());
});

gulp.task('jshint', function(){
    return gulp.src(['source/js/**/*.js', '!source/js/vendor/**'])
        .pipe($.jshint())
        .pipe($.jshint.reporter('default'));
});

gulp.task('test', ['csslint', 'jshint'], function(){
    return gulp.src('test/test.js')
        .pipe($.mocha({
            timeout:    8000
        }));
});