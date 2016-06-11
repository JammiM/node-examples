//This file sets up a Express based server


var http = require("http");
var fileSystem = require("fs");
var path = require("path");

var hostname = "localhost";
var port = 3000;

var server = http.createServer(function(requestMessage, responseMessage){
      var fileUrl;
      var filePath;
      var fileExt;
  console.log("Request for " + requestMessage.url + " by method " + requestMessage.method);
  if (requestMessage.method == "GET") {

        if (requestMessage.url == "/") fileUrl = "/index.html";
        else fileUrl = requestMessage.url;
        filePath = path.resolve('./public'+fileUrl);
        fileExt = path.extname(filePath);
        if (fileExt == '.html') {
              fileSystem.exists(filePath, function(exists) {                 if (!exists) {
            	responseMessage.writeHead(404, { 'Content-Type': 'text/html' });
            	responseMessage.end('<html><body><h1>Error 404: ' + fileUrl +
                                  ' not found</h1></body></html>');
            	return;
              }
              responseMessage.writeHead(200, { 'Content-Type': 'text/html' });
              fileSystem.createReadStream(filePath).pipe(responseMessage);
                  });
        }
    else {

        responseMessage.writeHead(404, { 'Content-Type': 'text/html' });
        responseMessage.end('<html><body><h1>Error 404: ' + fileUrl +
                            ' not a HTML file</h1></body></html>');
    }
  }//if GET
  else {
        responseMessage.writeHead(404, { 'Content-Type': 'text/html' });
        responseMessage.end('<html><body><h1>Error 404: ' + requestMessage.method +
                            ' not supported</h1></body></html>');
  }
})

server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/ \n\nPress Ctrl + C to terminate Server.`);
});
