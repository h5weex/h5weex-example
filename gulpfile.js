var gulp = require('gulp'),
    gutil = require('gulp-util'),
    webserver = require('gulp-webserver'),
    replace = require('gulp-replace'),
    webpack = require('webpack'),
    glob = require('glob'),
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

/**
 * 生成索引文件
 * @return {[type]}   [description]
 */
gulp.task('index', function () {
    glob('./src/p/*.we', {}, function(err, files) {
        var str = '';
        files.forEach(function(file) {
            str += "'" + file.replace('./src/p/','').replace('.we','') + "',";
        });
        str = str.substring(0,str.length-1);

        gulp.src(['./index.html'])
            .pipe(replace(/var pagelist = \[(.*?)\];/g, 'var pagelist = ['+str+'];'))
            .pipe(gulp.dest('./'));
    });
});


gulp.task('build', ['tojs']);
gulp.task('default', ['index', 'watch', 'webserver']);
