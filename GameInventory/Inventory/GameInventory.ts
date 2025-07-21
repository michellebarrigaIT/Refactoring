import { Item } from "./Item";

export class GameInventory {
  private readonly items: Item[];

  constructor(items: Item[]) {
    this.items = items;
  }

  updateQuality(): void {
    for (let index = 0; index < this.items.length; index++) {
      if (
        this.items[index].name !== "Aged Brie" &&
        this.items[index].name !== "Backstage passes to a Pokemon Gym concert"
      ) {
        if (
          this.items[index].quality > 0 &&
          this.items[index].name !== "Sulfuras, Hand of Ragnaros"
        ) {
          this.items[index].quality--;
        }
      } else {
        if (this.items[index].quality < 50) {
          this.items[index].quality++;
          if (
            this.items[index].name ===
            "Backstage passes to a Pokemon Gym concert"
          ) {
            if (
              this.items[index].sellIn < 11 &&
              this.items[index].quality < 50
            ) {
              this.items[index].quality++;
            }
            if (
              this.items[index].sellIn < 6 &&
              this.items[index].quality < 50
            ) {
              this.items[index].quality++;
            }
          }
        }
      }

      if (this.items[index].name !== "Sulfuras, Hand of Ragnaros") {
        this.items[index].sellIn--;
      }

      if (this.items[index].sellIn < 0) {
        if (this.items[index].name !== "Aged Brie") {
          if (
            this.items[index].name !==
            "Backstage passes to a Pokemon Gym concert"
          ) {
            if (
              this.items[index].quality > 0 &&
              this.items[index].name !== "Sulfuras, Hand of Ragnaros"
            ) {
              this.items[index].quality--;
            }
          } else {
            this.items[index].quality =
              this.items[index].quality - this.items[index].quality;
          }
        } else {
          if (this.items[index].quality < 50) {
            this.items[index].quality++;
          }
        }
      }
    }
  }
}
