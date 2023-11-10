export class User {
  constructor(_name) {
    this.name = _name, 
    this.items = [];
  }

  get name() {
    return this._name;
  }

  get items() {
    return this._items;
  }

  set name(newName) {
    this._name = newName;
  }

  set items(items) {
    this._items = items;
  }

  addItem(item) {
    this.items.push(item);
  }

  changeCompletion(item) {
    this.items.map((task) => {
      if (task.id === item) {
        task[isCompleted] = !task[isCompleted];
      }
    });
  }

  removeTodo(item) {
    this.items.filter((task) => task.id !== item);
  }
}
