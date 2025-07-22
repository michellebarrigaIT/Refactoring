import { ItemStrategy } from "../interfaces/ItemStrategy.interface";
import { StrategyFactory } from "../interfaces/StrategyFactory.interface";
import { Item } from "../Inventory/Item";
import { AgedBrieStrategy } from "../strategies/AgedBrie.strategy";
import { BackstagePassStrategy } from "../strategies/BackstagePass.strategy";
import { NormalItemStrategy } from "../strategies/NormalItem.strategy";
import { SulfurasStrategy } from "../strategies/Sulfuras.strategy";

export class ConcreteStrategyFactory implements StrategyFactory {
    getStrategy(item: Item): ItemStrategy {
        if (this.isAgedBrie(item)) {
        return new AgedBrieStrategy();
        } else if (this.isBackstagePass(item)) {
        return new BackstagePassStrategy();
        } else if (this.isSulfuras(item)) {
        return new SulfurasStrategy();
        } else {
        return new NormalItemStrategy();
        }
    }
    
    createStrategy(item: Item): ItemStrategy {
        return this.getStrategy(item);
    }
    
    private isAgedBrie(item: Item): boolean {
        return item.name === "Aged Brie";
    }
    
    private isBackstagePass(item: Item): boolean {
        return item.name === "Backstage passes to a Pokemon Gym concert";
    }
    
    private isSulfuras(item: Item): boolean {
        return item.name === "Sulfuras, Hand of Ragnaros";
    }
}
