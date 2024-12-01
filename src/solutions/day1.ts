import { parseInput } from "../utils/inputParser";

export const solve = (input: string): number => {
    const leftList: number[] = [];
    const rightList: number[] = [];

    const inputs = parseInput(input);
    inputs.forEach((value) => {
        const splitValues = value.split(/\s+/);
        leftList.push(Number(splitValues[0]));
        rightList.push(Number(splitValues[1]));
    });

    leftList.sort((a, b) => a - b);
    rightList.sort((a, b) => a - b);

    const arrLength = leftList.length;

    if (arrLength !== rightList.length) {
        throw new Error('Array sizes do not match');
    }

    let sum = 0;
    for (let i = 0; i < arrLength; i++) {
        sum += Math.abs(leftList[i] - rightList[i]);
    }
    return sum;
};
