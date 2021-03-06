var express = require('express');
var path = require('path');
var app = express();
app.get('/home', function(req, res) {
    app.set('views', process.argv[3] || path.join(__dirname, 'templates'));
    app.set('view engine', 'pug');
    res.render('index', { date: new Date().toDateString() });
})

app.listen(process.argv[2]);