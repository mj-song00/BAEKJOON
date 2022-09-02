const fs = require("fs");
const input = require('fs').readFileSync('./1181.txt').toString().trim().split('\n');
input.shift()

//let arr = []
//console.log([...arr])

// for(let i =0; i < input.length; i++){
//     arr.push(input[i])
  
//     arr.sort((a,b) => a -b )
//     arr.sort((a,b) => a.length -b.length || a.localeCompare(b))
// }
const sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
const array = new Set(sorted)
console.log(Array.from(array).join('\n'))