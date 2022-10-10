const [N, ...M] = require("fs")
  .readFileSync("./1764.txt")
  .toString()
  .split("\n");

let S = [];
S.push(...M);

//console.log(...S);

// function soluthion() {
//   let answer = "";
//   for (let i = 1; i < S.length; i++) {
//     if (S.indexOf(S[i]) === i) answer += S[i];
//   }
//   return answer;
// }

// let answer = S.filter((val, idx) => {
//   return S.indexOf(val) === idx;
// });

const findDuplicates = (S) =>
  S.filter((item, index) => S.indexOf(item) !== index);
const duplicates = findDuplicates(S);
console.log(...duplicates);
