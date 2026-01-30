import { Message } from './message.js';
import { displayMessage, renderAll } from './ui.js';
import { socketService } from './socket-service.js'
import { findUser } from './users.js'
import { saveLastPerson, saveMessage } from './localStorage.js';

const sendMessageForm = document.querySelector('.chat-input-area form');
const messageInput = document.getElementById('message-input');
const newConversationButton = document.getElementsByClassName("add-new-conversation")[0];

const username = prompt("What's your name?");
const currentUser = findUser(username);
let otherUser = currentUser;

document.addEventListener('DOMContentLoaded', () => {
    renderAll(currentUser, otherUser);
});

sendMessageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let text = messageInput.value;
    messageInput.value = "";

    if(text != "") {
        let message = new Message(text, currentUser.username);
        displayMessage(message, currentUser);
        saveMessage(message, currentUser, otherUser);
        if(currentUser.username != otherUser.username)
        {
            socketService.sendMessage(message);
        }
    }
})

messageInput.addEventListener('keydown', function(event) { 
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessageForm.requestSubmit(); 
    }
})

newConversationButton.addEventListener("click", event => {
    event.preventDefault();

    otherUser = findUser(prompt("Who do you want to talk to?"));
    renderAll(currentUser, otherUser);
})

socketService.onMessageReceived((data) => {
    const sender = findUser(data.source);
    saveMessage(data, currentUser, sender);
    saveLastPerson(currentUser, sender);
    displayMessage(data, currentUser);
})