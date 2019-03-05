var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var extension = process.argv[3];
fs.readdir(dir, (err, list) => {
    if(err) {
        console.log(err);
    }
    for(var i = 0; i < list.length; i++) {
        if(path.extname(list[i]) === "."+extension) {
            console.log(list[i]);
        }
    }
});