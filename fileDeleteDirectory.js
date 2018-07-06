var fs = require("fs");
fs.rmdir('./test1', function(err) {
  if(err) {
    console.log(err);
  }
  console.log("Directory Removed");
});
