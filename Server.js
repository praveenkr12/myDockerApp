var http = require('http');

var handleRequest = function(request, response) {
  console.log('Praveen test Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World!');
};
var www = http.createServer(handleRequest);
www.listen(8080);
