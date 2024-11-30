
class Storage {

  constructor(initialItems) {
    this._items = initialItems; // приватна властивість 
  }
  getItems() {
    return this._items;
  }

  addItem(newItem) {
    this._items.push(newItem); //  новий товар до масиву
  }

  removeItem(itemToRemove) {
    const index = this._items.indexOf(itemToRemove); 
    if (index !== -1) {
      this._items.splice(index, 1); // видалення
    }
  }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
