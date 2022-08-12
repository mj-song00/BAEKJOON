//const fs = require("fs");
const input = require('fs').readFileSync('./input.txt').toString().split(' ');

const pieces = [1,1,2,2,2,8]

const answer = pieces.map((piece, idx) => piece - input[idx])

console.log(answer.join(' '))