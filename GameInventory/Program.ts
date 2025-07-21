import { Item } from "./Inventory/Item";
import { GameInventory } from "./Inventory/GameInventory";

export class Program {
  static main(): void {
    console.log("Here we are!");

    const items: Item[] = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of sRagnaros", -1, 80),
      new Item("Backstage passes to a Pokemon Gym concert", 15, 20),
      new Item("Backstage passes to a Pokemon Gym concert", 10, 49),
      new Item("Backstage passes to a Pokemon Gym concert", 5, 49),
      new Item("Conjured Mana Cake", 3, 6),
    ];

    const app = new GameInventory(items);

    for (let index = 0; index < 31; index++) {
      console.log(`-------- day ${index} --------`);
      console.log("name, sellIn, quality");

      for (let pivot = 0; pivot < items.length; pivot++) {
        console.log(items[pivot].toString());
      }

      console.log("");
      app.updateQuality();
    }
  }
}

Program.main();
