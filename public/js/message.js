export class Message {
    constructor(text) {
        this.text = text;
        let now = new Date();
        this.timestamp = this.#formatTime(now);
    }

    #formatTime(time) {
        return time.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    }
}