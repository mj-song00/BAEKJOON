// //const fs = require("fs");

// const input = require('fs').readFileSync('./input.txt').toString().trim().split(' ');

// const h = input[0]
// const m = input[1]

// if (m >= 45) {
//     console.log(h, m - 45);
// }
// else if (m < 45) {
//     if (h != 0) {
//         console.log(h - 1, 60 - (45 - m));
//     }
//     if (h == 0) {
//         console.log(23, 60 - (45 - m));
//     }
// }

// const readline = require('readline');
// const fs = require("fs");
// const file = "./input.txt";

// const rl = readline.createInterface({

//     input: fs.createReadStream(file),
//   output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
// const h = input[0]
// const m = input[1]
// console.log(h,m)

// if (m >= 45) {
//     console.log(h, m - 45);
// }
// else if (m < 45) {
//     if (h != 0) {
//         console.log(h - 1, 60 - (45 - m));
//     }
//     if (h == 0) {
//         console.log(23, 60 - (45 - m));
//     }
// }
 
//   }).on('close', function () {
//     process.exit();
//   });

//제출용

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split(' ').map(Number)// 0을 해당 문서 절대경로로 교체

const h = input[0]
const m = input[1]

if (m >= 45) {
    console.log(h, m - 45);
}
else if (m < 45) {
    if (h != 0) {
        console.log(h - 1, 60 - (45 - m));
    }
    if (h == 0) {
        console.log(23, 60 - (45 - m));
    }
}