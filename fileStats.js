var fs = require('fs');
console.log("Going to open a file");

//Open a file
fs.open('input.txt','r+', function(err,fd){
  if(err) {
    return console.log(err);
  }
  console.log("File Opened Successfully");
});

//File stats
fs.stat('input.txt', function(err,stats){
  if(err) {
    return console.log(err);
  }
  console.log(stats);
  console.log("Got file info")
  console.log('Is file?: '+stats.isFile());
  console.log('Is directory?: '+stats.isDirectory());

});
