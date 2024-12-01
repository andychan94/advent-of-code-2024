import fs from 'fs';
import { solve } from './solutions/day1';

const day = process.argv[2];

if (day) {
    const input = fs.readFileSync(`inputs/day${day}.txt`, 'utf8');
    const answer = solve(input);
    console.log(`Day ${day} answer: ${answer}`);
}