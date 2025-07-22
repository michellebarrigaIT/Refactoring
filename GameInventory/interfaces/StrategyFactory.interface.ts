import { Item } from "../Inventory/Item";
import { ItemStrategy } from "./ItemStrategy.interface";

export interface StrategyFactory {
  getStrategy(item: Item): ItemStrategy;
  createStrategy(item: Item): ItemStrategy;
}
