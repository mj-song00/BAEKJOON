const fs = require('fs')
const input = fs.readFileSync('./11050.txt').toString().trim().split(' ').map(Number)

const N = input[0]
const K = input[1]

function factorial(num) {
    return (num > 0 ) ? num * factorial(num-1) : 1
}

const fraction = factorial(K) * factorial(N - K) // 분모
const molecule = factorial(N)

console.log(molecule/fraction)