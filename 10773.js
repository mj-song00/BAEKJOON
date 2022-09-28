const fs = require("fs");
const input = require('fs').readFileSync('./10773.txt').toString().trim().split('\n').map(Number);

const k = input[0]
let sum = 0
const arr = []




for(let i = 1; i <= k; i++){
    if( input[i] !== 0) {
        arr.push(input[i])
    } else {
        arr.pop(input[i])
    }
    console.log(arr)
}

if (arr.length < 1) {
    console.log('0')
}else {
    arr.forEach(function(item){
        sum += item
    })
    console.log(sum)
}