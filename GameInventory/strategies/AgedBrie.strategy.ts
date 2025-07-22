import { ItemStrategy } from "../interfaces/ItemStrategy.interface";
import { Item } from "../Inventory/Item";

export class AgedBrieStrategy implements ItemStrategy {
  update(item: Item): void {
    if (item.quality < 50) {
      item.quality++;
    }
    item.sellIn--;
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality++;
    }
  }
}
