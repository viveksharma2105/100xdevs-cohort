import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port: 8080});


//event handler
wss.on("connection", function(socket){
console.log("user Connected");
 
 socket.on("message", function(event){
    console.log("Received message:", event.toString());
    
    if(event.toString() === "ping"){
        
        socket.send("pong");
    }
 })
})