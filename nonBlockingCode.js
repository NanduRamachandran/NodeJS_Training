var fs = require("fs");
//Executes asynchronously. This is known as callback.
fs.readFile("input.txt",function(err,data){
  if(err) return console.error(err);
  console.log(data.toString())
});
console.log("Program ended")
