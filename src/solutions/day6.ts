import { parseInput } from "../utils/inputParser";

export const solvePart1 = (input: string): number => {
  const lines = parseInput(input);
  let guardFound = false;
  const guardStartCoords: number[] = [];
  let maxX = 0;
  let maxY = lines.length - 1;

  const obstacleMap: string[][] = [];

  lines.forEach((line, i) => {
    if (maxX === 0) {
      maxX = line.length - 1;
    }
    const lineItems = line.split("");
    obstacleMap.push(lineItems);
    lineItems.forEach((val, j) => {
      if (val === "^" && !guardFound) {
        guardStartCoords.push(i, j);
        guardFound = true;
      }
    });
  });

  if (guardStartCoords.length !== 2) {
    throw Error("Guard start pos could not be determined");
  }

  const rotateGuard = ([x, y]: [number, number]): [number, number] => {
    return [-y, x];
  };

  const visited = new Set<string>();
  visited.add([guardStartCoords[0], guardStartCoords[1]].toString());

  const findExit = (currentX: number, currentY: number, guardDirectionXY: [number, number]) => {
    while (true) {
      visited.add([currentY, currentX].toString());
      if (obstacleMap[currentY + guardDirectionXY[1]][currentX + guardDirectionXY[0]] === "#") {
        guardDirectionXY = rotateGuard([guardDirectionXY[0], guardDirectionXY[1]]);
        continue;
      }
      if (
        (![0, maxY].includes(currentY) && [0, maxY].includes(currentY + guardDirectionXY[1])) ||
        (![0, maxX].includes(currentX) && [0, maxX].includes(currentX + guardDirectionXY[0]))
      ) {
        visited.add([currentY + guardDirectionXY[1], currentX + guardDirectionXY[0]].toString());
        break;
      }
      currentX = currentX + guardDirectionXY[0];
      currentY = currentY + guardDirectionXY[1];
    }
  };

  findExit(guardStartCoords[1], guardStartCoords[0], [0, -1]);

  return visited.size;
};

/**
 * good old brute-force.
 * Brace yourself - takes around 10 mins to solve against day6.txt
 */
export const solvePart2 = (input: string): number => {
  const lines = parseInput(input);
  let guardFound = false;
  const guardStartCoords: number[] = [];
  let maxX = 0;
  let maxY = lines.length - 1;

  const obstacleMap: string[][] = [];

  lines.forEach((line, i) => {
    if (maxX === 0) {
      maxX = line.length - 1;
    }
    const lineItems = line.split("");
    obstacleMap.push(lineItems);
    lineItems.forEach((val, j) => {
      if (val === "^" && !guardFound) {
        guardStartCoords.push(i, j);
        guardFound = true;
      }
    });
  });

  if (guardStartCoords.length !== 2) {
    throw Error("Guard start pos could not be determined");
  }

  const rotateGuard = ([x, y]: [number, number]): [number, number] => {
    return [-y, x];
  };

  const visited = new Set<string>();
  visited.add([guardStartCoords[0], guardStartCoords[1]].toString());

  const isInfiniteLoop = (
    currentX: number,
    currentY: number,
    guardDirectionXY: [number, number],
    newObstacleX: number,
    newObstacleY: number,
  ) => {
    let obstaclesHit = 0;
    while (obstaclesHit < 100000) {
      visited.add([currentY, currentX].toString());
      if (
        obstacleMap[currentY + guardDirectionXY[1]][currentX + guardDirectionXY[0]] === "#" ||
        (currentY + guardDirectionXY[1] === newObstacleY &&
          currentX + guardDirectionXY[0] === newObstacleX)
      ) {
        guardDirectionXY = rotateGuard([guardDirectionXY[0], guardDirectionXY[1]]);
        obstaclesHit += 1;
        continue;
      }
      if (
        (![0, maxY].includes(currentY) && [0, maxY].includes(currentY + guardDirectionXY[1])) ||
        (![0, maxX].includes(currentX) && [0, maxX].includes(currentX + guardDirectionXY[0]))
      ) {
        visited.add([currentY + guardDirectionXY[1], currentX + guardDirectionXY[0]].toString());
        return false;
      }
      currentX = currentX + guardDirectionXY[0];
      currentY = currentY + guardDirectionXY[1];
    }
    return true;
  };

  let counter = 0;
  for (let i = 0; i <= maxY; i++) {
    for (let j = 0; j <= maxX; j++) {
      if (obstacleMap[i][j] === "#") {
        continue;
      }
      if (isInfiniteLoop(guardStartCoords[1], guardStartCoords[0], [0, -1], j, i)) {
        counter += 1;
      }
    }
  }

  return counter;
};
