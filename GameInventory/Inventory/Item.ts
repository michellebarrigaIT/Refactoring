export class Item {
  name: string | null = null;
  sellIn: number = 0;
  quality: number = 0;

  constructor(name?: string, sellIn?: number, quality?: number) {
    if (name !== undefined) this.name = name;
    if (sellIn !== undefined) this.sellIn = sellIn;
    if (quality !== undefined) this.quality = quality;
  }

  toString(): string {
    return `${this.name}, ${this.sellIn}, ${this.quality}`;
  }
}
