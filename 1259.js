const fs = require("fs");
const input = require('fs').readFileSync('./1259.txt').toString().trim().split('\n');

input.pop()



for(let i =0; i < input.length; i++){
  let strReverse  = input[i].split('').reverse().join('')
    console.log(strReverse === input[i] ? 'yes' : 'no' )
}