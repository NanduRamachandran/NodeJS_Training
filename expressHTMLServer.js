var express = require("express");
var path = require('path');
app = express();

app.get('/', function(request,response) {
  response.sendFile("index.html", {root: path.join(__dirname, "/html")})
});

app.listen(8082, function(request,response) {
  console.log("Listening to port 8082");
});
