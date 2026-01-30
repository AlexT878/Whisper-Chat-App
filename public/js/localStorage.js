export function saveMessage(message, currentUser, otherUser) {
    console.log(currentUser);
    console.log(otherUser);
    const chatID = getChatID(currentUser.username, otherUser.username);
    const history = JSON.parse(localStorage.getItem(chatID)) || [];
    history.push(message);

    localStorage.setItem(chatID, JSON.stringify(history));
}

export function saveLastPerson(currentUser, otherUser) {
    localStorage.setItem(currentUser.username, JSON.stringify(otherUser));
}

export function getLastPerson(currentUser) {
    return JSON.parse(localStorage.getItem(currentUser.username)) || null;
}

export function getMessages(currentUser, otherUser) {
    let chatID = getChatID(currentUser.username, otherUser.username);
    const history = JSON.parse(localStorage.getItem(chatID)) || [];
    return history;
}

export function getUserLastMessage(currentUser, otherUser) {
    let chatID = getChatID(currentUser.username, otherUser.username);
    console.log(chatID);
    const history = JSON.parse(localStorage.getItem(chatID)) || [];
    return history[0];
}

export function getChatID(user1, user2) {
    return [user1, user2].sort().join('_');
}