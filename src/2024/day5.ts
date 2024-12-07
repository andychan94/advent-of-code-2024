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

export const solvePart2 = (input: string): number => {
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

  const isPagesValid = (pages: number[]): boolean => {
    const currentPageOrder: number[] = [];
    for (const page of pages) {
      if (
        page in comesBeforeRule &&
        comesBeforeRule[page].some((pageNum) => currentPageOrder.includes(pageNum))
      ) {
        return false;
      }
      currentPageOrder.push(page);
    }
    return true;
  };

  const invalidPagesList: number[][] = [];
  for (const pages of pagesToProduce) {
    if (!isPagesValid(pages)) {
      invalidPagesList.push(pages);
    }
  }

  const makePagesValid = (currentInvalidPages: number[]): number[] => {
    if (isPagesValid(currentInvalidPages)) {
      return currentInvalidPages;
    }

    const currentPages: number[] = [];
    for (let i = 0; i < currentInvalidPages.length; i++) {
      const pageNum = currentInvalidPages[i];
      if (
        pageNum in comesBeforeRule &&
        comesBeforeRule[pageNum].some((pageNum1) => currentPages.includes(pageNum1))
      ) {
        let moveTargetPos: number | undefined = undefined;
        for (const targetNum of comesBeforeRule[pageNum]) {
          const targetNumPos = currentInvalidPages.indexOf(targetNum);
          if (targetNumPos === -1) {
            continue;
          }
          if (moveTargetPos === undefined) {
            moveTargetPos = targetNumPos;
            continue;
          }
          moveTargetPos = Math.min(moveTargetPos, targetNumPos);
        }
        if (moveTargetPos === undefined) {
          continue;
        }
        currentInvalidPages.splice(i, 1);
        currentInvalidPages.splice(moveTargetPos, 0, pageNum);

        return makePagesValid(currentInvalidPages);
      } else {
        currentPages.push(pageNum);
      }
    }
    return currentInvalidPages;
  };

  const validPages: number[][] = [];
  invalidPagesList.forEach((invalidPages) => validPages.push(makePagesValid(invalidPages)));

  let sum = 0;
  validPages.forEach((page) => (sum += page[Math.floor(page.length / 2)]));

  return sum;
};
