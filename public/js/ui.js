import { getMessages, getUserLastMessage } from "./localStorage.js";

const messageContainer = document.querySelector('.messages-container');
const profilePicture = document.querySelector('.profile-btn img');

export function displayMessage(message, currentUser) {
    const messageDiv = document.createElement('div');

    let type = "received";
    if(message.source == currentUser.username) {
        type = "sent";
    }

    messageDiv.classList.add(`message-${type}`);
    
    messageDiv.innerHTML = `
            <div class="message-content">
                <p>${message.text}</p>
            </div>
            <span class="message-time">${message.timestamp}</span>
        `;
    
    messageContainer.appendChild(messageDiv);
    messageContainer.scrollTop = messageContainer.scrollHeight;
} 

export function renderAll(currentUser, otherUser) {
    renderMyProfile(currentUser);
    renderActiveConversation(currentUser, otherUser);
    renderRecentConversation(currentUser, otherUser);
}

function renderMyProfile(currentUser) {
    profilePicture.src = currentUser.avatar;
}

function renderActiveConversation(currentUser, otherUser) {
    let activeUserConversationName = document.getElementsByClassName('principal-contact-name')[0];
    let chatPartenerInfo = document.getElementsByClassName("chat-partner-info")[0];
    let activeUserConversationPhoto = chatPartenerInfo.querySelector("img");
    const allMesages = getMessages(currentUser, otherUser);

    messageContainer.innerHTML = "";
    allMesages.forEach(message => {
        displayMessage(message, currentUser);
    });

    activeUserConversationPhoto.src = otherUser.avatar;
    activeUserConversationName.textContent = otherUser.completeName;
    if(currentUser.username == otherUser.username) {
        activeUserConversationName.textContent += " (You)";
    }
}

function renderRecentConversation(user, otherUser) {
    let contactName = document.getElementsByClassName("contact-name")[0];
    let avatar = document.getElementsByClassName("avatar")[0];
    let avatarImg = avatar.querySelector("img");
    let lastMessage = document.getElementsByClassName("last-message")[0];

    contactName.textContent = user.completeName;
    avatarImg.src = user.avatar;
    lastMessage.textContent = getUserLastMessage(user, user).text;
}
