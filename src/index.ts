import fs from "fs";

const day = process.argv[2];
const part = process.argv[3];

if (day && part) {
  const input = fs.readFileSync(`inputs/day${day}.txt`, "utf8");
  import(`./solutions/day${day}`)
    .then((solutions) => {
      const answer = part === "1" ? solutions.solvePart1(input) : solutions.solvePart2(input);
      console.log(`Day ${day} part ${part}, answer: ${answer}`);
    })
    .catch((error) => {
      console.error(`Error loading day ${day} solution:`, error);
    });
}
