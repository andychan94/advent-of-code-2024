import { parseInput } from "../utils/inputParser";

export const solvePart1 = (input: string): number => {
  const lines = parseInput(input);

  const comesBeforeRule: Record<number, number[]> = {};
  const pagesToProduce: number[][] = [];
  let isFirstSection = true;
  for (const line of lines) {
    if (line === "") {
      isFirstSection = false;
      continue;
    }
    if (isFirstSection) {
      const nums = line.split("|").map((num) => Number(num));
      (comesBeforeRule[nums[0]] ??= []).push(nums[1]);
      continue;
    }
    pagesToProduce.push(line.split(",").map((num) => Number(num)));
  }

  const validPages: number[][] = [];
  for (const pages of pagesToProduce) {
    let isValid = true;
    const currentPageOrder: number[] = [];
    for (const page of pages) {
      if (
        page in comesBeforeRule &&
        comesBeforeRule[page].some((pageNum) => currentPageOrder.includes(pageNum))
      ) {
        isValid = false;
        break;
      }
      currentPageOrder.push(page);
    }
    if (isValid) {
      validPages.push(currentPageOrder);
    }
  }

  let sum = 0;
  validPages.forEach((page) => (sum += page[Math.floor(page.length / 2)]));

  return sum;
};
