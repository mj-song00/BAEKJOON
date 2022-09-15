const fs = require("fs");
let input = require('fs').readFileSync('./2164.txt').toString().trim().split('\n').map(Number);
const arr = Array.from ({ length: parseInt(input) }, (v, i) => i + 1); // 1부터 6까지 배열 생성

while (arr.length > 1) {
    arr.splice(0,1)
    arr.push(arr.splice(0,1)[0])
    console.log(arr.splice(0,1)[0])
}

console.log(arr)