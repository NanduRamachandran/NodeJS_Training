var fs = require("fs");
var zlib = require("zlib");

//Compress to gz format
fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

console.log("File Compressed");
