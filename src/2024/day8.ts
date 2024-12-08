import { parseInput } from "../utils/inputParser";

export const solvePart1 = (input: string): number => {
  const lines = parseInput(input);

  let maxX = 0;
  const maxY = lines.length - 1;

  // A: [[y1,x1], [y2,x2], ...]
  const locations: Record<string, [number, number][]> = {};

  lines.forEach((line, y) => {
    if (maxX === 0) {
      maxX = line.length - 1;
    }
    line.split("").forEach((char, x) => {
      if (char !== ".") {
        locations[char.toString()] ??= [];
        locations[char.toString()].push([y, x]);
      }
    });
  });

  const placeAntinodes = (coordinatesList: [number, number][], i: number, j: number) => {
    const [Y1, X1] = coordinatesList[i];
    const [Y2, X2] = coordinatesList[j];

    const deltaY = Y1 - Y2;
    const deltaX = X1 - X2;

    const antinode1Y = Y1 + deltaY;
    const antinode1X = X1 + deltaX;

    while (0 <= antinode1Y && antinode1Y <= maxY && 0 <= antinode1X && antinode1X <= maxX) {
      uniqueAntinodes.add([antinode1Y, antinode1X].toString());
      break;
    }

    const antinode2Y = Y2 - deltaY;
    const antinode2X = X2 - deltaX;

    while (0 <= antinode2Y && antinode2Y <= maxY && 0 <= antinode2X && antinode2X <= maxX) {
      uniqueAntinodes.add([antinode2Y, antinode2X].toString());
      break;
    }
  };

  const uniqueAntinodes = new Set<string>();
  for (const coordinates of Object.values(locations)) {
    if (coordinates.length < 2) {
      continue;
    }

    for (let i = 0; i < coordinates.length - 1; i++) {
      for (let j = i + 1; j < coordinates.length; j++) {
        placeAntinodes(coordinates, i, j);
      }
    }
  }
  return uniqueAntinodes.size;
};

export const solvePart2 = (input: string): number => {
  const lines = parseInput(input);

  let maxX = 0;
  const maxY = lines.length - 1;

  // A: [[y1,x1], [y2,x2], ...]
  const locations: Record<string, [number, number][]> = {};

  lines.forEach((line, y) => {
    if (maxX === 0) {
      maxX = line.length - 1;
    }
    line.split("").forEach((char, x) => {
      if (char !== ".") {
        locations[char.toString()] ??= [];
        locations[char.toString()].push([y, x]);
      }
    });
  });

  const placeAntinodes = (coordinatesList: [number, number][], i: number, j: number) => {
    const [Y1, X1] = coordinatesList[i];
    const [Y2, X2] = coordinatesList[j];

    const deltaY = Y1 - Y2;
    const deltaX = X1 - X2;

    let antinode1Y = Y1;
    let antinode1X = X1;

    while (0 <= antinode1Y && antinode1Y <= maxY && 0 <= antinode1X && antinode1X <= maxX) {
      uniqueAntinodes.add([antinode1Y, antinode1X].toString());
      antinode1Y += deltaY;
      antinode1X += deltaX;
    }

    let antinode2Y = Y2;
    let antinode2X = X2;

    while (0 <= antinode2Y && antinode2Y <= maxY && 0 <= antinode2X && antinode2X <= maxX) {
      uniqueAntinodes.add([antinode2Y, antinode2X].toString());
      antinode2Y -= deltaY;
      antinode2X -= deltaX;
    }
  };

  const uniqueAntinodes = new Set<string>();
  for (const coordinates of Object.values(locations)) {
    if (coordinates.length < 2) {
      continue;
    }

    for (let i = 0; i < coordinates.length - 1; i++) {
      for (let j = i + 1; j < coordinates.length; j++) {
        placeAntinodes(coordinates, i, j);
      }
    }
  }
  return uniqueAntinodes.size;
};
