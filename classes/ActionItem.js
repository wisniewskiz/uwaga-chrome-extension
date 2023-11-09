export class ActionItem {
  constructor(_text) {
    (this.text = _text), (this.isCompleted = false), (this.timeStamp = Date());
    (this.id = crypto.randomUUID()), (this.notes = [{}]);
  }
}
