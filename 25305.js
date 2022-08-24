const fs = require('fs')
const input = fs.readFileSync('./25305.txt').toString().trim().split('\n')

//const person = input[0].split(' ')[0]
const price = (input[0].split(' ')[1]) - 1


const test= input[1].split(' ')
//const count = 0 
test.sort(function(a,b){
    return b - a
})

console.log(test[price])


