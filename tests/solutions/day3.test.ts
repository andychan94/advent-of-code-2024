import { solvePart1, solvePart2 } from "../../src/solutions/day3";

describe("Day 3 solution", () => {
  describe("Part 1", () => {
    const exampleInput = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
    it("can solve example input", () => {
      const result = solvePart1(exampleInput);
      expect(result).toBe(161);
    });
  });

  describe("Part 2", () => {
    const exampleInput =
      "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
    it("can solve example input", () => {
      const result = solvePart2(exampleInput);
      expect(result).toBe(48);
    });
  });
});
