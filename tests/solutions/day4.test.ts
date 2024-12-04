import { solvePart1, solvePart2 } from "../../src/solutions/day4";

describe("Day 4 solution", () => {
  const exampleInput = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;
  describe("Part 1", () => {
    it("can solve example input", () => {
      const result = solvePart1(exampleInput);
      expect(result).toBe(18);
    });
  });

  describe("Part 2", () => {
    it("can solve example input", () => {
      const result = solvePart2(exampleInput);
      expect(result).toBe(9);
    });
  });
});
