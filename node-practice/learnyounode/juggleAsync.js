var http = require('http');
var concat = require('concat-stream');

var results = [];
var count = 0;

function printResults() {
    for(var i = 0; i < 3; i++) {
        console.log(results[i]);
    }
}

function httpGet(index) {
    http.get(process.argv[2 + index], (response) => {
        response.pipe(concat((data) => {
            results[index] = data.toString();
            count++;
        }));
        response.on('end', () => {
            if(count === 3) {
                printResults();
            }
        });
    });
}

for(var i = 0; i < 3; i++) {
    httpGet(i);
}

