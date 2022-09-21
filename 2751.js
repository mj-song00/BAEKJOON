const fs = require("fs");
let input = fs.readFileSync('./2751.txt').toString().trim().split('\n').map(Number);

input.shift()
input.sort((a,b) => a - b)

console.log(...input)

////////

