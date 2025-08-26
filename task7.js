export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.inventory = {}; // { "potion": 2, "sword": 1 }
  }

  addItem(item, quantity = 1) {
    if (!this.inventory[item]) {
      this.inventory[item] = 0;
    }
    this.inventory[item] += quantity;
  }

  removeItem(item, quantity = 1) {
    if (this.inventory[item]) {
      this.inventory[item] -= quantity;
      if (this.inventory[item] <= 0) {
        delete this.inventory[item];
      }
    }
  }
}
