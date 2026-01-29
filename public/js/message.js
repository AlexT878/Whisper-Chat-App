export class Message {
    constructor(text, source) {
        this.text = text;
        let now = new Date();
        this.timestamp = this.#formatTime(now);
        this.source = source;
    }

    #formatTime(time) {
        return time.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    }
}