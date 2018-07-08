var express = require('express');
app = express();
var bodyParser = require("body-parser");
app.use(bodyParser());

app.get('/', function(req,resp) {
    resp.sendFile('index.html', {root : "./"});
})

app.post('/', function(req,resp){
    resp.end(JSON.stringify(req.body));
});

app.listen('8081', function() {
    console.log("listening to 8081");
});