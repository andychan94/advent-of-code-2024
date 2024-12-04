import { solvePart1, solvePart2 } from "../../src/solutions/day2";

describe("Day 2 solution", () => {
  const exampleInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
  describe("Part 1", () => {
    it("can solve example input", () => {
      const result = solvePart1(exampleInput);
      expect(result).toBe(2);
    });
  });

  describe("Part 2", () => {
    it("can solve example input", () => {
      const result = solvePart2(exampleInput);
      expect(result).toBe(4);
    });
  });
});
