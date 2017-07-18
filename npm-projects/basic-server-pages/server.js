/*	This file simply creates a server with the minimum amount of functionality.
	Server response codes (200, 302, 404, 500)
	Listens on port 1300
*/

// Loading the modules
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

// Defining the types of files that can be used on the server.
const mimeTypes = {
	"html": "text/html",
	"jpeg": "image/jpeg",
	"jpg": "image/jpg",
	"png": "image/png",
	"js": "text/javascript",
	"css": "text/css"
};


http.createServer(function(request, response){
	var uri = url.parse(request.url).pathname;
	var fileName = path.join(process.cwd(), unescape(uri));
	console.log('Loading '+ uri);
	var stats;

	try{
		stats = fs.lstatSync(fileName);
	} catch(e){
		response.writeHead(404, {'Content-type': 'text/plain'});
		response.write('404 Not Found\n');
		response.end();
		return;
	}

	if(stats.isFile()){
		
		var mimeType = mimeTypes[path.extname(fileName).split(".").reverse()[0]];
		response.writeHead(200, {'Content-type': mimeType});

		var fileStream = fs.createReadStream(fileName);
		fileStream.pipe(response);


	} else if(stats.isDirectory()) {
		// If it's just a folder then open a file called "index.html" 
		response.writeHead(302, { 'Location' : 'index.html' });
		response.end();
	} else {

		response.writeHead(500, {'Content-type':'text/plain'});
		response.write('500 Internal Error\n');
		response.end();

	}

}).listen(1300); // http.createServer