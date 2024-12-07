import { parseInput } from "../utils/inputParser";

export const solvePart1 = (input: string): number => {
  let sum = 0;

  const lines = parseInput(input);
  lines.forEach((line) => {
    const sep = line.split(":");
    const target = Number(sep[0]);
    const numbers: number[] = [];
    sep[1].split(" ").forEach((val) => {
      val = val.trim();
      if (val !== "" && !isNaN(Number(val))) {
        numbers.push(Number(val));
      }
    });
    const canAchieve = canAchieveTarget(numbers, target);
    if (canAchieve) {
      sum += target;
    }
  });

  return sum;
};

export const solvePart2 = (input: string): number => {
  let sum = 0;

  const lines = parseInput(input);
  lines.forEach((line) => {
    const sep = line.split(":");
    const target = Number(sep[0]);
    const numbers: number[] = [];
    sep[1].split(" ").forEach((val) => {
      val = val.trim();
      if (val !== "" && !isNaN(Number(val))) {
        numbers.push(Number(val));
      }
    });
    const canAchieve = canAchieveTarget(numbers, target, true);
    if (canAchieve) {
      sum += target;
    }
  });

  return sum;
};

const canAchieveTarget = (numbers: number[], target: number, withConcat?: boolean): boolean => {
  const backtrack = (index: number, currentValue: number) => {
    const concatNumbers = (left: number, right: number) => {
      return Number(`${left}${right}`);
    };
    if (index === numbers.length) {
      return currentValue === target;
    }

    const nextNumber = numbers[index];

    if (backtrack(index + 1, currentValue + nextNumber)) {
      return true;
    }

    if (backtrack(index + 1, currentValue * nextNumber)) {
      return true;
    }

    if (withConcat) {
      if (backtrack(index + 1, concatNumbers(currentValue, nextNumber))) {
        return true;
      }
    }
    return false;
  };

  return backtrack(1, numbers[0]);
};
