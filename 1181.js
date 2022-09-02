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
const sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));//사전배열
const array = new Set(sorted)
console.log(Array.from(array).join('\n')) //유사 배열객체나 반복 가능한 객체를 얕게 복사해 새로운 array객채 생성