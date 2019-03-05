const express = require('express');
const app = express();

var path = process.argv[3];
app.use(require('stylus').middleware(path));
app.use(express.static(path));

app.get('/main.css', (req, res) => {
    res.end();
});

app.listen(process.argv[2]);