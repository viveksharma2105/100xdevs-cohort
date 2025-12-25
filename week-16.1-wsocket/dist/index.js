"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
//event handler
wss.on("connection", function (socket) {
    console.log("user Connected");
    socket.on("message", function (event) {
        console.log("Received message:", event.toString());
        if (event.toString() === "ping") {
            console.log("Sending pong response");
            socket.send("pong");
        }
    });
});
//# sourceMappingURL=index.js.map