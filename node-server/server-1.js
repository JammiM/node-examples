//Creates a basic server on port 3000

var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(requestMessage, responseMessage){

  console.log(requestMessage.headers);
  responseMessage.writeHead(200, { 'Content-Type': 'text/html' });
  responseMessage.end('<html><body><h1>Hello World</h1></body></html>');

  })

server.listen(port, hostname, function(){
  console.log(`\nServer running at http://${hostname}:${port}/ \n\nPress Ctrl + C to terminate Server.`);
});
