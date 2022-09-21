// const fs = require("fs");
// let input = fs.readFileSync('./2751.txt').toString().trim().split('\n').map(Number);

// input.shift()
// input.sort((a,b) => a - b)

// console.log(...input)

//////// 2번 풀이 다 틀렸따.. 띠로리 

const fs = require("fs");
const input = fs.readFileSync('./2751.txt').toString().trim().split('\n').map(Number);
 
input.sort((a,b) => a - b)

// function getCount(input){
//     return input.reduce((pv, cv) =>{
//         pv[cv] = (pv[cv] || 0) + 1;
//         return pv;
//     }, {})
// }



// console.log(getCount(input))

const set = new Set(input)
const newArr = set
console.log(...newArr)