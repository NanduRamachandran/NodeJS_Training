var express = require("express");
app = express();

app.use('/testFile', express.static(__dirname + '/test'));
//Go to localhost:8082/testFile/test.txt

app.listen(8082, function(request,response) {
  console.log("Listening to port 8082");
});
