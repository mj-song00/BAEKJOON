const fs = require('fs')
const input = fs.readFileSync('./3009.txt').toString().trim().split('\n')

//그려보니 x,y 한개만 나온 값이 구하려는 x,y값  
let a
let b 
let xList = []
let yList = []

for (let i = 0; i < input.length; i++){

    xList.push(input[i].split(' ')[0])
    yList.push(input[i].split(' ')[1])
}

console.log(xList)

a = xList.sort() // 5 5 7 
b = yList.sort() // 5 5 7 

x = a[1] === a[0] ? a[2] : a[0]
y = b[1] === b[0] ? b[2] : b[0]

console.log(x,y)