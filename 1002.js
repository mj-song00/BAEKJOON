const fs = require('fs')
const input = fs.readFileSync('./1002.txt').toString().trim().split('\n')


input.shift()

console.log(input)

//그림 그려보니 원의 교접문제 