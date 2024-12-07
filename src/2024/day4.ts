import { parseInput } from "../utils/inputParser";

export const solvePart1 = (input: string): number => {
  const lines = parseInput(input);
  const word = "XMAS";
  const firstLetter = word[0];

  const xLength = lines[0].length;
  const yLength = lines.length;
  const chars: string[][] = [];
  lines.forEach((line) => chars.push(line.split("")));

  let counter = 0;

  const isMatchingWord = (
    startX: number,
    startY: number,
    deltaX: number,
    deltaY: number,
  ): boolean => {
    for (let k = 1; k < word.length; k++) {
      const newX = startX + k * deltaX;
      const newY = startY + k * deltaY;

      if (
        newX < 0 ||
        newX >= yLength ||
        newY < 0 ||
        newY >= xLength ||
        chars[newX][newY] !== word[k]
      ) {
        return false;
      }
    }
    return true;
  };

  const directions = [
    [0, 1], // ➡️
    [0, -1], // ⬅️
    [1, 0], // ⬇️
    [-1, 0], // ⬆️
    [1, 1], // ↘️
    [-1, 1], // ↗️
    [1, -1], // ↙️
    [-1, -1], // ↖️
  ];

  for (let i = 0; i < yLength; i++) {
    for (let j = 0; j < xLength; j++) {
      if (chars[i][j] === firstLetter) {
        for (const [deltaX, deltaY] of directions) {
          if (isMatchingWord(i, j, deltaX, deltaY)) {
            counter++;
          }
        }
      }
    }
  }
  return counter;
};

export const solvePart2 = (input: string): number => {
  const lines = parseInput(input);
  const word = "MAS";
  const wordReversed = word.split("").reverse().join("");

  const chars: string[][] = [];
  lines.forEach((line) => chars.push(line.split("")));

  let counter = 0;
  for (let i = 1; i < chars.length - 1; i++) {
    for (let j = 1; j < chars[i].length - 1; j++) {
      if (chars[i][j] === word[1]) {
        const word1 = chars[i - 1][j - 1] + word[1] + chars[i + 1][j + 1];
        const word2 = chars[i - 1][j + 1] + word[1] + chars[i + 1][j - 1];
        if ([word, wordReversed].includes(word1) && [word, wordReversed].includes(word2)) {
          counter += 1;
        }
      }
    }
  }
  return counter;
};
