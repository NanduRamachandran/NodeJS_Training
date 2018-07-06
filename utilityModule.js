console.log("Current filename: "+__filename);
console.log("Current directory :"+__dirname);

function greeting() {
  console.log("Nice meeting you");
}
function bye() {
  console.log("bye");
}
//call greeting after 2 seconds
var t = setTimeout(greeting,2000);
//clear greeting message uncomment below code
//clearTimeout(t);

setInterval(bye,2000);
