import { Item } from "../Inventory/Item";
import { AgedBrieStrategy } from "../strategies/AgedBrie.strategy";

describe("AgedBrieStrategy", () => {
  let strategy: AgedBrieStrategy;

  beforeEach(() => {
    strategy = new AgedBrieStrategy();
  });

  test("should increase quality by 1 and decrease sellIn by 1 when sellIn > 0", () => {
    const item = new Item("Aged Brie", 5, 10);

    strategy.update(item);

    expect(item.sellIn).toBe(4);
    expect(item.quality).toBe(11);
  });

  test("should increase quality by 2 when sellIn <= 0", () => {
    const item = new Item("Aged Brie", 0, 10);

    strategy.update(item);

    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(12);
  });

  test("should not increase quality beyond 50", () => {
    const item = new Item("Aged Brie", 0, 50);

    strategy.update(item);

    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(50);
  });
});
