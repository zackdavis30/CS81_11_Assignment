var http = require("http");

http.createServer(function (request, response) {
	response.writeHead(200,{'Content-Type':'text/html'});

	response.end('Hello World!, my name is Zack Davis \n');
}).listen(8001);

console.log('Server Running at http://127.0.0.1:8001/');