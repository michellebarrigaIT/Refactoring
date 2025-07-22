import { ItemStrategy } from "../interfaces/ItemStrategy.interface";
import { Item } from "../Inventory/Item";

export class SulfurasStrategy implements ItemStrategy {
  update(item: Item): void {
    // No change
  }
}