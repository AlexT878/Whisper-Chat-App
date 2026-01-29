const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log(socket.id + ' :connected');

    socket.on('disconnect', () => {
        console.log(socket.id + ' :disconnected');
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
});

// node --watch server.js