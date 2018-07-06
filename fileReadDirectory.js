var fs = require("fs");
fs.readdir('test', function(err,files) {
  if(err) {
    console.log(err);
  }
  files.forEach(function(file) {
    console.log(file);
  });
});
