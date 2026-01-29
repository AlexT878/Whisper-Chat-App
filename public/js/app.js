import { Message } from './message.js';
import { displayMessage } from './ui.js';
import { socketService } from './socket-service.js'

const sendMessageForm = document.querySelector('.chat-input-area form');
const messageInput = document.getElementById('message-input');

sendMessageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let text = messageInput.value;
    messageInput.value = "";

    if(text != "") {
        let message = new Message(text);
        displayMessage(message, 'sent');
        socketService.sendMessage(message);
    }
})

messageInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessageForm.requestSubmit();
    }
})

socketService.onMessageReceived((data) => {
    displayMessage(data, "received");
})