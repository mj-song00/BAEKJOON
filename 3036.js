//원의 둘레를 이용한 문제
// 첫번째 원의 둘레를 나머지 원의 둘레로 나누면 된다(최대공약수)
// 근데 코드는 안나오징 

const fs = require('fs')
//const input = fs.readFileSync('./3036.txt').toString().trim().split('\n')
const [_, input] = fs.readFileSync("./3036.txt").toString().trim().split("\n");
//input.shift()


// const r = input[0].split(' ')// 공백을 기준으로 분리

// //원의 둘레
// const map1 = r.map(x => x * 2)

// const ci1 = map1[0] // 첫번째 원의 둘레




const nums = input.split(' ').map(v => +v);
let first = nums.shift();

nums.forEach(v => {
  const gcd = GCD(first, v);
  console.log((first / gcd) + '/' + (v / gcd))
})



function GCD(a, b) {
  let x;
  let y;
  if (a > b) {
    x = a; y = b;
  } else {
    x = b; y = a;
  }
  let r;
  while (y != 0) {
    r = x % y;
    x = y;
    y = r;
  }
  return x;
}
