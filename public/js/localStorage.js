export function saveMessage(message, user) {
    const history = JSON.parse(localStorage.getItem(user.username)) || [];
    history.push(message);

    localStorage.setItem(user.username, JSON.stringify(history));
}

export function getMessages(user) {
    const history = JSON.parse(localStorage.getItem(user.username)) || [];
    
    return history;
}