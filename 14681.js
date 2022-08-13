const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split(' ').map(Number);

const x = input[0]
const y = input[1]
console.log(x,y)

if (x > 0 ){
    y > 0 ? console.log(1) : console.log(4)
} else  {
    y > 0 ? console.log(2) : console.log(4)
}

// const readline = require("readline");
// const fs = require("fs");
// const file = "./input.txt";

// const rl = readline.createInterface({
//   input: fs.createReadStream(file),
//   output: process.stdout,
//   terminal: false,
// });

// let input = [];

// rl.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {
//   const x = input[0];
//   const y = input[1];


//   if (x > 0) {
//     y > 0 ? console.log(1) : console.log(4)
//   }

//   if (x < 0) {
//     y > 0 ? console.log(2) : console.log(3)
//   }

//   process.exit();
// });


//제출용

// const readline = require("readline");



// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false,
// });

// let input = [];

// rl.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {
//   const x = input[0];
//   const y = input[1];


//   if (x > 0) {
//     y > 0 ? console.log(1) : console.log(4)
//   }

//   if (x < 0) {
//     y > 0 ? console.log(2) : console.log(3)
//   }

//   process.exit();
// });