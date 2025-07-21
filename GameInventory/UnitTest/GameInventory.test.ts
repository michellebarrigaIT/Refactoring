import { Item } from "../Inventory/Item";
import { GameInventory } from "../Inventory/GameInventory";

describe("GameInventory", () => {
  describe("BackstagePasses", () => {
    test.each([
      [0, 0, 0, -1],
      [10, 40, 42, 9],
      [12, 40, 41, 11],
    ])(
      "sellIn: %i, quality: %i should result in quality: %i, sellIn: %i",
      (sellIn, quality, expectedQuality, expectedSellIn) => {
        const items: Item[] = [
          new Item(
            "Backstage passes to a Pokemon Gym concert",
            sellIn,
            quality
          ),
        ];
        const app = new GameInventory(items);

        app.updateQuality();

        expect(items[0].name).toBe("Backstage passes to a Pokemon Gym concert");
        expect(items[0].quality).toBe(expectedQuality);
        expect(items[0].sellIn).toBe(expectedSellIn);
      }
    );
  });

  test("Sulfuras", () => {
    const items: Item[] = [new Item("Sulfuras, Hand of Ragnaros", 10, 10)];
    const app = new GameInventory(items);

    app.updateQuality();

    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].quality).toBe(10);
    expect(items[0].sellIn).toBe(10);
  });

  test("AgedBrie", () => {
    const items: Item[] = [new Item("Aged Brie", 5, 7)];
    const app = new GameInventory(items);

    app.updateQuality();

    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].quality).toBe(8);
    expect(items[0].sellIn).toBe(4);
  });

  test("Foo", () => {
    const items: Item[] = [new Item("foo", 0, 0)];
    const app = new GameInventory(items);

    app.updateQuality();

    expect(items[0].name).toBe("foo");
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(-1);
  });
});
