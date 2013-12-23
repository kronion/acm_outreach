/* Express */
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

/* Jade */
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

/* FS */
var fs = require('fs');

app.get('/', function(req, res) {
  fs.readFile('modules.json', function(err, data) {
    if (err) throw err;
    var modules = JSON.parse(data);
    res.render('index', {"modules": modules});
  });
});

app.listen(5000);
