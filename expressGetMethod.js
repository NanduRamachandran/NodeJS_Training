var express = require("express");
app = express();
app.get("/", function(req,resp) {
    var response = "Hello " + req.query.firstname;
    resp.end(response);
});
//URL: localhost:8082/?firstname=Nandu
app.listen('8082', function() {
    console.log("listening to 8082");
});