import { solvePart1, solvePart2 } from "../../src/2024/day6";

describe("Day 5 solution", () => {
  const exampleInput = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;
  describe("Part 1", () => {
    it("can solve example input", () => {
      const result = solvePart1(exampleInput);
      expect(result).toBe(41);
    });
  });
  describe("Part 2", () => {
    it("can solve example input", () => {
      const result = solvePart2(exampleInput);
      expect(result).toBe(6);
    });
  });
});
