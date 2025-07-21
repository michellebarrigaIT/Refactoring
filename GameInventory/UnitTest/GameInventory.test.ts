import { Item } from "../Inventory/Item";
import { GameInventory } from "../Inventory/GameInventory";

describe("GameInventory", () => {
  describe("BackstagePasses", () => {
    test.each([
      [0, 0, 0, -1],     // quality drops to 0 after concert
      [10, 40, 42, 9],   // increases by 2 when sellIn <= 10
      [12, 40, 41, 11],  // increases by 1 when sellIn > 10
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

    test("BackstagePasses quality increases by 3 when sellIn <= 5", () => {
      const items = [new Item("Backstage passes to a Pokemon Gym concert", 5, 45)];
      const app = new GameInventory(items);

      app.updateQuality();

      expect(items[0].quality).toBe(48);
      expect(items[0].sellIn).toBe(4);
    });

    test("BackstagePasses quality drops to 0 after sellIn < 0", () => {
      const items = [new Item("Backstage passes to a Pokemon Gym concert", 0, 40)];
      const app = new GameInventory(items);

      app.updateQuality();

      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(-1);
    });
  });
  
  describe("Sulfuras", () => {
    test("Never decreases quality or sellIn", () => {
      const items: Item[] = [new Item("Sulfuras, Hand of Ragnaros", 10, 10)];
      const app = new GameInventory(items);

      app.updateQuality();

      expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
      expect(items[0].quality).toBe(10);
      expect(items[0].sellIn).toBe(10);
    });
  });

  describe("AgedBrie", () => {
    test("Increases quality by 1 before sellIn <= 0", () => {
      const items = [new Item("Aged Brie", 5, 7)];
      const app = new GameInventory(items);

      app.updateQuality();

      expect(items[0].quality).toBe(8);
      expect(items[0].sellIn).toBe(4);
    });

    test("Increases quality by 2 after sellIn < 0", () => {
      const items = [new Item("Aged Brie", 0, 48)];
      const app = new GameInventory(items);

      app.updateQuality();

      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(-1);
    });

    test("Quality never exceeds 50", () => {
      const items = [new Item("Aged Brie", 5, 50)];
      const app = new GameInventory(items);

      app.updateQuality();

      expect(items[0].quality).toBe(50);
    });
  });
  describe("Foo", () => {
    test("Degrade quality by 1 before sellIn <= 0", () => {
      const items: Item[] = [new Item("foo", 0, 0)];
      const app = new GameInventory(items);

      app.updateQuality();

      expect(items[0].name).toBe("foo");
      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(-1);
    });

    test("degrade quality by 2 after sellIn < 0", () => {
      const items = [new Item("+5 Dexterity Vest", 0, 10)];
      const app = new GameInventory(items);

      app.updateQuality();

      expect(items[0].quality).toBe(8);
      expect(items[0].sellIn).toBe(-1);
    });

    test("quality never negative", () => {
      const items = [new Item("foo", 0, 0)];
      const app = new GameInventory(items);

      app.updateQuality();

      expect(items[0].quality).toBeGreaterThanOrEqual(0);
    });
  });
});
