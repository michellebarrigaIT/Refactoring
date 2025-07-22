import { Program } from "../Program";
import * as fs from "fs";
import * as path from "path";

function normalize(text: string): string {
  return text
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+$/gm, "")
    .trim();
}

describe("ApprovalTest", () => {
  test("ThirtyDays Approval", () => {
    const originalLog = console.log;
    const output: string[] = [];
    console.log = jest.fn((message: string) => {
      output.push(message);
    });

    Program.main();

    console.log = originalLog;
    const result = output.join("\n");
    const approvedPath = path.resolve(__dirname, "ThirtyDays.approved.txt");
    const approvedContent = fs.readFileSync(approvedPath, "utf-8");

    expect(normalize(result)).toBe(normalize(approvedContent));
  });

  test("Output contains Conjured Mana Cake", () => {
    const originalLog = console.log;
    const output: string[] = [];
    console.log = jest.fn((message: string) => output.push(message));

    Program.main();

    console.log = originalLog;

    const fullOutput = output.join("\n");
    expect(fullOutput).toContain("Conjured Mana Cake");
  });
});
