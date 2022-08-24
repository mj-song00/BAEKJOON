const fs = require("fs");
const input = require('fs').readFileSync('./7568.txt').toString().split('\n')

rank = []
input.splice(0,1)

// const weight = input[1].split(' ')[0]
// const hight = input[1].split(' ')[1]

//console.log(weight, hight)

for (let i = 0 ; i < input.length; i++ ){
    let count = 0
    for(let j = 0; j < input.length; j++) {
        if (i !== j) {
            if (
                input[i][0] < input[j][0] && input[i][1] < input[j][1] 
            ) {
                count++
            }
        }
    }
    rank.push(count + 1)
}
console.log(rank.join(' '))
