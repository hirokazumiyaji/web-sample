var express = require('express');
var fs = require('fs');

var app = express();

app.use('/assets/css', express.static(__dirname + '/assets/css'));
app.use('/assets/images', express.static(__dirname + '/assets/images'));
app.use('/assets/js', express.static(__dirname + '/assets/js'));

app.get('/', function(req, res) {
  fs.readFile('./index.html', 'UTF-8', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  })
})

app.post('/', function(req, res) {
  fs.readFile('./index.html', 'UTF-8', function(err, data) {
    console.log(req);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  })
})

app.listen(3000);
