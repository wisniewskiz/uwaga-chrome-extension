export class Note {
    constructor(_text) {
        this.text = _text, 
        this.id = crypto.randomUUID();
    }
}