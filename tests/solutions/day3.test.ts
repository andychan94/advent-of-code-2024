import { solvePart1 } from "../../src/solutions/day3";

describe('Day 3 solution', () => {
    describe('Part 1', () => {
        it('can solve example input', () => {
            const input = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';
            const result = solvePart1(input);
            expect(result).toBe(161);
        });
    });
});
