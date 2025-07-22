import { Item } from "../Inventory/Item";
import { NormalItemStrategy } from "../strategies/NormalItem.strategy";

describe("NormalItemStrategy", () => {
  let strategy: NormalItemStrategy;

  beforeEach(() => {
    strategy = new NormalItemStrategy();
  });

  test("Should decrease quality by 1 and sellIn by 1 when sellIn > 0", () => {
    const item = new Item("Normal Item", 5, 10);

    strategy.update(item);

    expect(item.sellIn).toBe(4);
    expect(item.quality).toBe(9);
  });

  test("Should decrease quality by 2 when sellIn <= 0", () => {
    const item = new Item("Normal Item", 0, 10);

    strategy.update(item);

    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(8);
  });

  test("Should not decrease quality below 0", () => {
    const item = new Item("Normal Item", 5, 0);

    strategy.update(item);

    expect(item.sellIn).toBe(4);
    expect(item.quality).toBe(0);
  });
});
