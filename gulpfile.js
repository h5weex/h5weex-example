var gulp = require('gulp'),
    gutil = require('gulp-util'),
    webserver = require('gulp-webserver'),
    webpack = require('webpack'),
    getWebpackConfig = require('./webpack.config');

/**
 * 源码打包成bundle
 * @return {[type]}   [description]
 */
gulp.task('tojs', function() {
    webpack(getWebpackConfig, function (err, stats) {
        if (err) {
            gutil.log(err);
        }

        gutil.log(stats.toString({
            colors: true,
            chunks: false
        }));
    });
});

// 开启 webserver 伺服静态资源
gulp.task('webserver', function() {
    return gulp.src('./')
        .pipe(webserver({
            host: "localhost",
            port: 3000,
            livereload: true,
            open: true,
            middleware: []
        }));
});

/**
 * 本地开发监听文件变化
 * @return {[type]}   [description]
 */
gulp.task('watch', function() {
    gulp.watch(['./src/p/*.we', './src/c/*.we'], ['tojs']);
});


gulp.task('build', ['tojs']);
gulp.task('default', ['watch', 'webserver']);
