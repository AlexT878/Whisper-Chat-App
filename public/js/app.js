import { Message } from './message.js';
import { displayMessage, renderMyProfile } from './ui.js';
import { socketService } from './socket-service.js'
import { findUser } from './users.js'
import { saveMessage } from './localStorage.js';

const sendMessageForm = document.querySelector('.chat-input-area form');
const messageInput = document.getElementById('message-input');

const username = prompt("What's your name?");
const currentUser = findUser(username);
console.log(currentUser);
renderMyProfile(currentUser);


sendMessageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let text = messageInput.value;
    messageInput.value = "";

    if(text != "") {
        let message = new Message(text, currentUser.username);
        displayMessage(message, currentUser);
        saveMessage(message, currentUser);
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
    saveMessage(data, currentUser);
    displayMessage(data, currentUser);
})