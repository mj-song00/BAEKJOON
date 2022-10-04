const input = require("fs")
  .readFileSync("./11650.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
const arr = input.map((nums) => nums.split(" ").map((nums) => parseInt(nums)));

let result = " ";
arr
  .sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  })

  .forEach((arr) => {
    result += `${arr[0]} ${arr[1]}\n`;
  });

console.log(result);
