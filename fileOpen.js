var fs = require('fs');
console.log("Going to open a file");

//Open a file
fs.open('input.txt','r+', function(err,fd){
  if(err) {
    return console.log(err);
  }
  console.log("File Opened Successfully");
});
