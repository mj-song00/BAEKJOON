const [M, ...S] = require("fs")
  .readFileSync("./11723.txt")
  .toString()
  .split("\n");

let answer = [];
let obj = {};
const s = [...S];

for (let i = 0; i <= M; i++) {
  const elements = (s[i] || "").split(" ")[0];
  const nums = (s[i] || "").split(" ")[1];

  switch (elements) {
    case "add":
      answer.push(nums);
      break;
    case "check":
      if (answer.includes(nums)) {
        answer.push("1");
      } else {
        answer.push("0");
      }
      break;
    case "remove":
      answer.pop(nums);
      break;
    case "toggle":
      if (answer.includes(nums)) {
        answer.pop(nums);
      } else {
        answer.push(nums);
      }
      break;
    case "all":
      const obj = Object.assign({}, answer);
      break;
  }
}

console.log(answer);
