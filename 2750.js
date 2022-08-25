const fs = require('fs')
const input = fs.readFileSync('./2750.txt').toString().trim().split('\n')

input.shift();

////삽입정렬
// function bubbleSort() {
//     let noSwaps;
//     for (let i = input.length; i > 0; i--) {
//         noSwaps = true;
//         for (let j = 0; j < i - 1; j++) {
//           if (input[j] > input[j+1]) {
//               let temp = input[j];
//               input[j] = input[j+1];
//               input[j+1] = temp;
//               noSwaps = false;
                           
//            }
//         }
//       if (noSwaps) break;
//      }
//     return input;
// }

// console.log(bubbleSort())

//버블정렬
var bubbleSort = function() {
    var length = input.length;
    var i, j, temp;
    for (i = 0; i < length - 1; i++) { // 순차적으로 비교하기 위한 반복문
      for (j = 0; j < length - 1 - i; j++) { // 끝까지 돌았을 때 다시 처음부터 비교하기 위한 반복문
        if (input[j] > input[j + 1]) { // 두 수를 비교하여 앞 수가 뒷 수보다 크면
          temp = input[j]; // 두 수를 서로 바꿔준다
          input[j] = input[j + 1];
          input[j + 1] = temp;
        }
      }
    }
    return input;
  };
console.log(bubbleSort())