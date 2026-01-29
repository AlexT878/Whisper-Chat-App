import { Message } from './message.js';
import { displayMessage } from './ui.js';

const socket = io();

const sendMessageForm = document.querySelector('.chat-input-area form');
const messageInput = document.getElementById('message-input');

sendMessageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let text = messageInput.value;
    messageInput.value = "";
    console.log(text);

    if(text != "") {
        let message = new Message(text);
        displayMessage(message, 'sent');

        let messageR = new Message("Ok");
        displayMessage(messageR, 'received');
    }
})

messageInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessageForm.requestSubmit();
    }
})