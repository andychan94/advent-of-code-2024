import { solvePart1, solvePart2 } from "../../src/solutions/day7";

describe("Day 5 solution", () => {
  const exampleInput = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`;
  describe("Part 1", () => {
    it("can solve example input", () => {
      const result = solvePart1(exampleInput);
      expect(result).toBe(3749);
    });
  });
  describe("Part 2", () => {
    it("can solve example input", () => {
      const result = solvePart2(exampleInput);
      expect(result).toBe(11387);
    });
  });
});
