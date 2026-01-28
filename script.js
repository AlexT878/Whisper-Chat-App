const sendMessageForm = document.querySelector('.chat-input-area form');
const messageInput = document.getElementById('message-input');
const messageContainer = document.querySelector('.messages-container');

class Message {
    constructor(text) {
        this.text = text;
        this.timestamp = new Date();
    }

    #formatTime() {
        return this.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    }

    render() {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add("message-sent");

        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${this.text}</p>
            </div>
            <span class="message-time">${this.#formatTime()}</span>
        `;

        messageContainer.appendChild(messageDiv);
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
}

sendMessageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    text = messageInput.value;
    messageInput.value = "";
    console.log(text);

    if(text != "") {
        message = new Message(text);
        message.render();
    }
})