var http = require("http");
http.createServer(function(request,response) {
  
  //Defining response head
  response.writeHead(200,{'Content-Type':'text/plain'});
  //Defining response body
  response.end('Hello World');

}).listen(8081);

console.log("Server up and running on http://127.0.0.1:8081")
