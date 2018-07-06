var fs = require("fs");
var data = fs.readFileSync('input.txt');//Executes Synchronously
console.log(data.toString());
console.log("Program ended")
