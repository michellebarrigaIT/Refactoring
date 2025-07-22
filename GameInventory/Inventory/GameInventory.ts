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
    if (this.isAgedBrie(item)) {
      this.updateAgedBrieQuality(item);
      return;
    }

    if (this.isBackstagePass(item)) {
      this.updateBackstagePassQuality(item);
      return;
    }

    this.updateNormalItemQuality(item);
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

  private updateBackstagePassQuality(item: Item): void {
    if (item.quality < 50) {
      item.quality++;
      if (item.sellIn < 11 && item.quality < 50) {
        item.quality++;
      }
      if (item.sellIn < 6 && item.quality < 50) {
        item.quality++;
      }
    }
    item.sellIn--;
    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  private updateAgedBrieQuality(item: Item): void {
    if (item.quality < 50) {
      item.quality++;
    }
    item.sellIn--;
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality++;
    }
  }

  private updateNormalItemQuality(item: Item): void {
    if (!this.isSulfuras(item) && item.quality > 0) {
      item.quality--;
    }
    if (!this.isSulfuras(item)) {
      item.sellIn--;
    }
    if (item.sellIn < 0 && !this.isSulfuras(item) && item.quality > 0) {
      item.quality--;
    }
  }
}
