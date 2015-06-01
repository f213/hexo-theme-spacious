var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    check_pages = require('check-pages');

gulp.task('brokenlinks', function(callback){
    
    var options = {
        pageUrls:       [ 'http://localhost:4000/blog' ],
        checkLinks:     true,
        onlySameDomain: true,
        summary:        true,
        linksToIgnore:  [
            'http://localhost:4000/favicon.ico',
            'http://localhost:4000/apple-touch-icon.png',
        ]
    };
    check_pages(console, options, callback);
});

gulp.task('server',  $.shell.task('node_modules/hexo/bin/hexo server', {cwd: '../../'}));

gulp.task('csslint', function(){
     return gulp.src('source/css/**/*.styl')
        .pipe($.stylint());
});