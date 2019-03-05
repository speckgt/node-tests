var http = require('http');
var url = require('url');
var server = http.createServer((req, res) => {
    if(req.method !== 'GET') {
        return res.end('send me a GET\n');
    }
    res.writeHead(200, { 'Content-Type': 'application/json'});
    var sentURL = url.parse(req.url, true);
    
    if(sentURL.pathname === '/api/parsetime') {
        var timeJSON = sentURL.query;
        var time = new Date(timeJSON['iso']);
        var json = {
            'hour': time.getHours(),
            'minute' : time.getMinutes(),
            'second': time.getSeconds()
        };

        res.write(JSON.stringify(json));

    } else if(sentURL.pathname === '/api/unixtime') {
        var time = new Date(sentURL.query['iso'])
        var json = {
            'unixtime': time.getTime()
        }

        res.write(JSON.stringify(json));
    }
    res.end();
});

server.listen(process.argv[2]);