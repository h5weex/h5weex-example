require('webpack')
require('weex-loader')

var path = require('path')
var fs = require('fs')
var entry = {};

function walk(dir) {
    var directory = path.join(__dirname, dir);
    fs.readdirSync(directory)
        .forEach(function(file) {
            var fullpath = path.join(directory, file);
            var stat = fs.statSync(fullpath);
            var extname = path.extname(fullpath);
            if (stat.isFile() && extname === '.we') {
              var name = path.basename(file, extname);
              entry[name] = fullpath + '?entry=true';
            }
        });
    return entry;
}

module.exports = {
    entry: walk('src/p'),
    output: {
        path: 'build',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.we(\?[^?]+)?$/,
            loaders: ['weex-loader']
        }]
    }
}
