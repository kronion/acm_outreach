/* Express */
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

/* Jade */
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(5000);
