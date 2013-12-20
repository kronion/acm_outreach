/* Express */
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('hey');
});

app.listen(5000);
