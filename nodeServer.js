// Load modules
const express = require('express');
var app = express();
var path = require('path')
var port = 1337;

app.get('/public/css/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/css/' + req.params[0]));
    console.log('loading css file: ' + req.params[0]);
});

app.get('/public/js/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/js/' + req.params[0]));
    console.log('loading js file: ' + req.params[0]);
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function(){
    console.log('Server is active on port ' + port);
});