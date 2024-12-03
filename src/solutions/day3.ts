import { parseInput } from "../utils/inputParser";

export const solvePart1 = (input: string): number => {
    const s = parseInput(input);
    let sum = 0;
    s.forEach((line) => {
        const regex = /mul\((\d+),(\d+)\)/g;
        const matches = line.matchAll(regex)
        for (const match of matches) {
            const a = Number(match[1]);
            const b = Number(match[2]);
            if (Number.isNaN(a) || Number.isNaN(b)) {
                continue;
            }
            sum += (a * b);
        }
    });
    return sum;
};
