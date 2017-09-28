var express = require('express');
var app = express();
app.get('/home', function(req, res) {
    res.writeHead(200, { 'content-Type': 'application/json' });
    res.end("Hello World!");
}).listen(process.argv[2]);