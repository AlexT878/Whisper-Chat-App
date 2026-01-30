const socket = io();

export const socketService = {
    sendMessage: (message) => {
        socket.emit("chat message", {
            text: message,
            socketID: socket.id
        });
    },

    onMessageReceived: (callback) => {
        socket.on("chat message", (data) => {
            if(data.socketID != socket.id)
            {
                console.log("Diferite")
                callback(data.text);
            }
        })
    }
}