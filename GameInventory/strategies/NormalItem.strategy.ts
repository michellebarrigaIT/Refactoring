import { ItemStrategy } from "../interfaces/ItemStrategy.interface";
import { Item } from "../Inventory/Item";

export class NormalItemStrategy implements ItemStrategy {
  update(item: Item): void {
    if (item.quality > 0) {
      item.quality--;
    }
    item.sellIn--;
    if (item.sellIn < 0 && item.quality > 0) {
      item.quality--;
    }
  }
}
