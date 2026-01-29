import { getMessages } from "./localStorage.js";

const messageContainer = document.querySelector('.messages-container');
const profilePicture = document.querySelector('.profile-btn img');

export function displayMessage(message, currentUser) {
    const messageDiv = document.createElement('div');

    let type = "received";
    if(message.source == currentUser.username) {
        type = "sent";
    }
    console.log(message.source);
    console.log(currentUser.username);

    messageDiv.classList.add(`message-${type}`);
    console.log(messageDiv);
    
    messageDiv.innerHTML = `
            <div class="message-content">
                <p>${message.text}</p>
            </div>
            <span class="message-time">${message.timestamp}</span>
        `;
    
    messageContainer.appendChild(messageDiv);
    messageContainer.scrollTop = messageContainer.scrollHeight;
} 

export function renderMyProfile(user) {
    profilePicture.src = user.avatar;
    const allMesages = getMessages(user);
    
    allMesages.forEach(message => {
        displayMessage(message, user);
    });
}