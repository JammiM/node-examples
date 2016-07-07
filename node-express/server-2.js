//This is another express server but this uses 'morgan' for
// logging data to the console.

//THe public folder, contains files that will be served as static files

var express = require('express');
var morgan = require('morgan');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
