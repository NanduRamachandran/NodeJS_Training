//Inport event
var events = require("events");

//Creating event emitter object
var eventEmitter = new events.EventEmitter()

//Define connectHandler function
var connectHandler = function connected(){
  console.log("Connection Successful");

  //Call data recieved event
  eventEmitter.emit("data_received");
}

//Connect connection name to connectHandler
eventEmitter.on('connection',connectHandler);

//Define anonymous data received function
eventEmitter.on("data_received", function(){
  console.log("Data Received");
});

//Call connection event
eventEmitter.emit('connection');

console.log("Connection Ended");
