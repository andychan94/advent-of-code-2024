import { solvePart1 } from "../../src/solutions/day6";

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
});
