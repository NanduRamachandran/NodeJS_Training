var fs = require('fs');

//Read from an existing file
var buf = new Buffer(1024);
fs.open('input.txt', 'r+', function(err,fd){
  if(err) {
    console.log(err);
  }
  fs.read(fd, buf, 0, buf.length, 0, function(err,bytes){
    if(err) {
      console.log(err);
    }
    console.log(bytes+' bytes read');
    if(bytes>0) {
      console.log(buf.slice(0,bytes).toString());
    }
  });
});
