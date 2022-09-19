let fs = require("fs");
let input = fs.readFileSync("./1330.txt").toString().split(' ').map(Number)

console.log(input[0])

if (input[0] > input[1]){
    console.log('>')
}else if (input[0] < input[1]) {
    console.log('<')
}else{
    console.log('==')
}

