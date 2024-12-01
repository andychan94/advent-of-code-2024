import { solve } from "../../src/solutions/day1";

describe('Day 1 solution', () => {
    it('can solve example input', () => {
        const input = `3   4
4   3
2   5
1   3
3   9
3   3`;
        const result = solve(input);
        expect(result).toBe(11);
    });

    it('can solve custom input', () => {
        const input = `24290   95805
35618   61879
76669   65779
65052   63193
27533   84394
37756   60034
28054   78373
56969   59374
83129   27070
81613   16770
75625   78373
17846   70557
77897   20442
93086   30896
73969   96869
87726   16313
88858   78373
65550   37042
60065   61551
91526   59209
15647   20187
40208   60034
45614   81345
56409   48982
14733   73493
50641   83354
60500   30643
66336   39913
52887   80280
72997   39913`;
        const result = solve(input);
        expect(result).toBe(72415);
    });
});
