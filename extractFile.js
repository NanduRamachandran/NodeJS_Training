fs = require("fs");
zlib = require("zlib");

//Extract File
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input_unzip.txt'));

console.log('File Extracted');
