import { Item } from "./Item";

export class GameInventory {
  private readonly items: Item[];

  constructor(items: Item[]) {
    this.items = items;
  }

  updateQuality(): void {
    for (let index = 0; index < this.items.length; index++) {
      if (
        !this.isBackstagePass(this.items[index].name ?? "") &&
        !this.isAgedBrie(this.items[index].name ?? "")
      ) {
        if (
          this.items[index].quality > 0 &&
          !this.isSulfuras(this.items[index].name ?? "")
        ) {
          this.items[index].quality--;
        }
      } else {
        if (this.items[index].quality < 50) {
          this.items[index].quality++;
          if (
           this.isBackstagePass(this.items[index].name ?? "")
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

      if (!this.isSulfuras(this.items[index].name ?? "")) {
        this.items[index].sellIn--;
      }

      if (this.items[index].sellIn < 0) {
        if (!this.isAgedBrie(this.items[index].name ?? "")) {
          if (
            !this.isBackstagePass(this.items[index].name ?? "")
          ) {
            if (
              this.items[index].quality > 0 &&
              !this.isSulfuras(this.items[index].name ?? "")
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

  private isSulfuras(itemName: string): boolean {
    return itemName === "Sulfuras, Hand of Ragnaros";
  }

  private isAgedBrie(itemName: string): boolean {
    return itemName === "Aged Brie";
  }

  private isBackstagePass(itemName: string): boolean {
    return itemName === "Backstage passes to a Pokemon Gym concert";
  }
}
