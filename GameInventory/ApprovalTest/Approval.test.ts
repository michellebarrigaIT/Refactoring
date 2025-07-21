import { Program } from "../Program";

describe("ApprovalTest", () => {
  test("ThirtyDays", () => {
    const originalLog = console.log;
    const output: string[] = [];
    console.log = jest.fn((message: string) => {
      output.push(message);
    });

    Program.main();

    console.log = originalLog;

    const fullOutput = output.join("\n");

    expect(output.length).toBeGreaterThan(0);
    expect(output[0]).toBe("Here we are!");
    expect(fullOutput).toContain("-------- day 0 --------");
    expect(fullOutput).toContain("-------- day 30 --------");
    expect(fullOutput).toContain("name, sellIn, quality");
    expect(fullOutput).toContain("+5 Dexterity Vest");
    expect(fullOutput).toContain("Aged Brie");
    expect(fullOutput).toContain("Sulfuras, Hand of Ragnaros");

  });
});
