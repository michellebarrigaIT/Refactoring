import { Item } from "../Inventory/Item";

export interface ItemStrategy {
  update(item: Item): void;
}
