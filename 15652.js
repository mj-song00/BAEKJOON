const fs = require('fs')
const input = fs.readFileSync('./15652.txt').toString().trim().split(' ').map(nm => parseInt(nm)); //parseInt => 문자열을 숫자로 변환

// const a = input
// const b = a[0]
// const c = a[1]


// for(let i = 1; i <= b; i++ ){
//     if ( c > 1){
//         for (let j = 1; j <= b; j++){
//             console.log(`${i} ${j}`)
//         }
//     }else{
//         console.log(i)
//     }
// }


// 백트래킹 공부 
const N = input.shift();
const M = input.shift();

const visited = new Array(N);
const output = [];
let result = '';

function dfs(idx, cnt) {
  if (cnt === M) {
    result += `${output.join(' ')}\n`;
   //console.log(cnt, M) // 3 3 이 10번 반복
    return;
  }

  for (let i = idx; i < N; i++) {

    output.push(i + 1);
    dfs(i, output.length);
    
    output.pop();
  }
}

dfs(0, 0);

console.log(result);
