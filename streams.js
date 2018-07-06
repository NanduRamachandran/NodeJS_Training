var fs = require("fs");
var data = "";
//Creating a read stream
var readStream = fs.createReadStream('input.txt');

//Set enoding method
readStream.setEncoding("UTF8");

//Handle events data, end and error
readStream.on('data', function(chunk){
  data += chunk;
});
readStream.on('end', function(){
  //Create Write Stream
  var writeStream = fs.createWriteStream('output.txt');
  writeStream.write(data,'UTF8');
  writeStream.end();
  writeStream.on('finish', function(){
    console.log("Write Complete");
  });
  writeStream.on('error', function(err){
    console.log(err);
  });
});
readStream.on('error', function(err){
  console.log(err.stack);
});

console.log("Program Ended");
