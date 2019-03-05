var http = require('http');
var concat = require('concat-stream');
var finalString = "";
var count = 0;
http.get(process.argv[2], (response) => {
    response.pipe(concat((data) => {
        count += data.length;
        finalString += data.toString();
    }));
    response.on('end', () => {
        console.log(count);
        console.log(finalString);
    });
})