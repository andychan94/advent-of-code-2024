import { parseInput } from "../utils/inputParser";

export const solvePart1 = (input: string): number => {
    const {array1, array2} = inputToArrays(input);

    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);

    const arrLength = array1.length;

    let sum = 0;
    for (let i = 0; i < arrLength; i++) {
        sum += Math.abs(array1[i] - array2[i]);
    }
    return sum;
};

export const solvePart2 = (input: string): number => {
    const {array1, array2} = inputToArrays(input);

    const frequencyMap: Record<number, number> = {};
    array2.forEach((num) => frequencyMap[num] = (frequencyMap[num] || 0) + 1);

    let sum = 0;
    for (const array1Num of array1) {
        sum += (frequencyMap[array1Num] || 0) * array1Num;
    }

    return sum;
};

/**
 * splits input into 2 number arrays
 */
const inputToArrays = (input: string): {array1: number[], array2: number[]} => {
    const array1: number[] = [];
    const array2: number[] = [];

    const inputs = parseInput(input);
    inputs.forEach((value) => {
        const splitValues = value.split(/\s+/);
        array1.push(Number(splitValues[0]));
        array2.push(Number(splitValues[1]));
    });

    if (array1.length !== array2.length) {
        throw new Error('Array sizes do not match');
    }

    return {
        array1: array1,
        array2: array2,
    }
}