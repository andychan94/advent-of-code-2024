import { parseInput } from "../utils/inputParser";

export const solvePart1 = (input: string): number => {
  const s = parseInput(input);
  let sum = 0;
  s.forEach((line) => {
    const regex = /mul\((\d+),(\d+)\)/g;
    const matches = line.matchAll(regex);
    for (const match of matches) {
      const multiplication = multiply(match);
      if (multiplication !== undefined) {
        sum += multiplication;
      }
    }
  });
  return sum;
};

export const solvePart2 = (input: string): number => {
  const s = parseInput(input);
  let sum = 0;
  let enabled = true;
  s.forEach((line) => {
    const regex = /do\(\)|don't\(\)|mul\((\d+),(\d+)\)/g;
    const matches = line.matchAll(regex);
    for (const match of matches) {
      if (!enabled && match[0] === "do()") {
        enabled = true;
        continue;
      }
      if (enabled && match[0] === "don't()") {
        enabled = false;
        continue;
      }
      if (enabled) {
        const multiplication = multiply(match);
        if (multiplication !== undefined) {
          sum += multiplication;
        }
      }
    }
  });
  return sum;
};

const multiply = (match: RegExpExecArray): number | undefined => {
  const a = Number(match[1]);
  const b = Number(match[2]);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return undefined;
  }
  return a * b;
};
