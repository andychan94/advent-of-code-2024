import { parseInput } from "../utils/inputParser";

export const solvePart1 = (input: string): number => {
  const lines = parseInput(input);
  let safeCount = 0;

  for (const line of lines) {
    const nums = line.split(" ").map((val) => Number(val));
    if (isArrayValid(nums)) {
      safeCount += 1;
    }
  }
  return safeCount;
};

export const solvePart2 = (input: string): number => {
  const lines = parseInput(input);
  let safeCount = 0;

  for (const line of lines) {
    const nums = line.split(" ").map((val) => Number(val));
    if (isArrayValid(nums)) {
      safeCount += 1;
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (isArrayValid(nums.slice(0, i).concat(nums.slice(i + 1)))) {
          safeCount += 1;
          break;
        }
      }
    }
  }
  return safeCount;
};

const isArrayValid = (nums: number[]): boolean => {
  let isAsc = true;
  let prevValue = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (Math.abs(nums[i] - prevValue) > 3 || nums[i] === prevValue) {
      return false;
    }

    if (i === 1) {
      isAsc = nums[i] - prevValue > 0;
      prevValue = nums[i];
      continue;
    }

    if (nums[i] - prevValue > 0 !== isAsc) {
      return false;
    }

    prevValue = nums[i];
  }
  return true;
};
