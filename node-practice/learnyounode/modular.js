var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
    var files = [];
    var err = fs.readdir(dir, (err, list) => {
        if(err) {
            return callback(err);
        }
        for(i in list) {
            if(path.extname(list[i]) === "." + ext) {
                files.push(list[i]);
            }
        }
        return callback(null, files);
    });
}