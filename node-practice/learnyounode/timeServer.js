var net = require('net');
var server = net.createServer((socket) => {

    var date = new Date();
    var time = date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) + ' ' + ('0' + date.getHours()).slice(-2) + ':' + date.getMinutes();
    socket.write(time);
    socket.end('\n');
});

server.listen(process.argv[2]);