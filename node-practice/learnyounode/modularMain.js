var modular = require('./modular.js');

modular(process.argv[2], process.argv[3], (err, data) => {
    if(err) {
        console.log(err);
    } else {
        for(d in data) {
            console.log(data[d]);
        }
    }
});