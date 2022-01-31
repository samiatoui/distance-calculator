const mqtt = require("mqtt");
var client = mqtt.connect(''); // link removed due to gmail security

var gps = "49.90855 -97.157385";           // coordinates to send
var gps1 = "49.893715 -97.054934";         // coordinates to send (my location)


client.on("connect", function () {
    setInterval(function(){
        console.log("Coordinates sent: " + gps1); // display in console
        client.publish('gps', gps1);              // publish for subscribers to receive
    },1000)
    
});



