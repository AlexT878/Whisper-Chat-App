const messageContainer = document.querySelector('.messages-container');
const profilePicture = document.querySelector('.profile-btn img');

export function displayMessage(message, type) {
    const messageDiv = document.createElement('div');
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
}