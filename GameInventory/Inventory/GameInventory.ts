import { Item } from "./Item";

export class GameInventory {
  private readonly items: Item[];

  constructor(items: Item[]) {
    this.items = items;
  }

  updateQuality(): void {
    this.items.forEach(item => this.updateItemQuality(item));
  }

  private updateItemQuality(item: Item): void {
    if (
        !this.isBackstagePass(item) &&
        !this.isAgedBrie(item)
      ) {
        if (item.quality > 0 && !this.isSulfuras(item)) {
          item.quality--;
        }

      } else {
        if (item.quality < 50) {
          item.quality++;
          if (this.isBackstagePass(item)) {
            if (
              item.sellIn < 11 &&
              item.quality < 50
            ) {
              item.quality++;
            }
            if (
              item.sellIn < 6 &&
              item.quality < 50
            ) {
              item.quality++;
            }
          }
        }
      }

      if (!this.isSulfuras(item)) {
        item.sellIn--;
      }

      if (item.sellIn < 0) {
        if (!this.isAgedBrie(item)) {
          if (
            !this.isBackstagePass(item)
          ) {
            if (item.quality > 0 && !this.isSulfuras(item)) {
              item.quality--;
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality++;
          }
        }
      }
  }

  private isSulfuras(item: Item): boolean {
    return item.name === "Sulfuras, Hand of Ragnaros";
  }

  private isAgedBrie(item: Item): boolean {
    return item.name === "Aged Brie";
  }

  private isBackstagePass(item: Item): boolean {
    return item.name === "Backstage passes to a Pokemon Gym concert";
  }
}
