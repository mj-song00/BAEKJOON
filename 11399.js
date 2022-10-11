const [N, P] = require("fs")
  .readFileSync("./11399.txt")
  .toString()
  .trim()
  .split("\n");

const p = P.split(" ");
p.sort((a, b) => a - b);
const time = p.map((i) => Number(i));
let answer = 0;
let count = 0;

for (let i = 0; i < N; i++) {
  answer += time[i];
  count += answer;
}
console.log(Math.max(count));
