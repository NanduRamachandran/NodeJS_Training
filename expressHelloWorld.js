var express = require("express");
app = express();

app.get('/HelloWorld', function(request,response) {
  response.send("Hello world from express");
});

app.listen(8082, function(request,response) {
  console.log("Listening to port 8082");
});
