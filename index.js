/**************************************************************************/
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
/**************************************************************************/
const app = express();
const PORT = 3000;
const httpServer = createServer(app);
/**************************************************************************/
const io = new Server(httpServer, {
    cors: { origin: "*", credentials: true }
});
/**************************************************************************/
const users = []
/**************************************************************************/
io.on("connection", (socket) => {
    // a catch-all listener
    socket.onAny((event, ...args) => {
        console.log(event, args);
    });
    // on disconnect
    socket.on("disconnect", () => {
        console.log("User Disconnected");
    })
    // on every message
    socket.on("chatmessage", msg => {
        io.emit('message', msg);
    })
    // on selecting the name
    socket.on("user", (user) => {
        
    })
    // on selected user
    socket.on("onUser", (user) => {
    
    })
});
/**************************************************************************/
httpServer.listen(PORT, function() {
    console.log(`LISTENING ON PORT ${PORT}`)
});
/**************************************************************************/