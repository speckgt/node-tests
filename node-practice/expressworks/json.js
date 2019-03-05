const express = require('express');
var fs = require('fs');
const app = express();

app.get('/books', (req, res) => {
    fs.readFile(process.argv[3], 'utf8', (err, data) => {
        if (err) {
            res.send(500);
        }
        try {
            var books = JSON.parse(data);
            res.json(books);
        } catch (error) {
            res.send(500);
        }
    });
});

app.listen(process.argv[2]);