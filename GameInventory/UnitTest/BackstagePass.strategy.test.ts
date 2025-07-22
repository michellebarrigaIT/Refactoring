import { Item } from "../Inventory/Item";
import { BackstagePassStrategy } from "../strategies/BackstagePass.strategy";

describe("BackstagePassStrategy", () => {
  let strategy: BackstagePassStrategy;

  beforeEach(() => {
    strategy = new BackstagePassStrategy();
  });

  test("should increase quality by 1 when sellIn > 10", () => {
    const item = new Item("Backstage passes to a Pokemon Gym concert", 15, 20);

    strategy.update(item);

    expect(item.sellIn).toBe(14);
    expect(item.quality).toBe(21);
  });

  test("should increase quality by 2 when sellIn <= 10 and > 5", () => {
    const item = new Item("Backstage passes to a Pokemon Gym concert", 10, 20);

    strategy.update(item);

    expect(item.sellIn).toBe(9);
    expect(item.quality).toBe(22);
  });

  test("should increase quality by 3 when sellIn <= 5 and > 0", () => {
    const item = new Item("Backstage passes to a Pokemon Gym concert", 5, 20);

    strategy.update(item);

    expect(item.sellIn).toBe(4);
    expect(item.quality).toBe(23);
  });

  test("should drop quality to 0 when sellIn <= 0", () => {
    const item = new Item("Backstage passes to a Pokemon Gym concert", 0, 20);

    strategy.update(item);

    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(0);
  });

  test("should not increase quality beyond 50", () => {
    const item = new Item("Backstage passes to a Pokemon Gym concert", 5, 49);

    strategy.update(item);

    expect(item.sellIn).toBe(4);
    expect(item.quality).toBe(50);
  });
});
