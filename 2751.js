const fs = require("fs");
const input = fs.readFileSync('./2751.txt').toString().trim().split('\n').map(Number);

input.shift()
input.sort((a,b) => a - b)

console.log(...input)

//////// 2번 풀이 다 틀렸따.. 띠로리 

// const fs = require("fs");
// const input = fs.readFileSync('./2751.txt').toString().trim().split('\n').map(Number);
 
// input.sort((a,b) => a - b)

// const set = new Set(input)
// const newArr = set
// console.log(...newArr)