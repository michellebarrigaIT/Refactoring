import { ConcreteStrategyFactory } from "../factories/ConcreteStrategy.factory";
import { Item } from "./Item";

export class GameInventory {
  private readonly items: Item[];

  constructor(items: Item[]) {
    this.items = items;
  }

  updateQuality(): void {
    this.items.forEach(item => {
      const factory = new ConcreteStrategyFactory();
      const strategy = factory.getStrategy(item);
      strategy.update(item);
    });
  }
}
