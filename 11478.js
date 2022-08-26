const fs = require('fs')
const input = fs.readFileSync('./11478.txt').toString().trim().split('\n')

const letter = input[0] //ababc

const arr = new Set() //변하지 않는 값은 const사용

for (let i = 0; i < letter.length; i++) {
    //console.log(i) //01234
    for (let j = i; j < letter.length; j++) {
       //  console.log(j) //01234 1234 234 34 4
         arr.add(letter.substring(i, j + 1))
         //console.log(arr)
     }
}

console.log(arr.size)

//set : 중복된 자료형을 걸러내기 위해 사용한다.
// 1. 모든 경우의 수를 중첩 for문으로 만들어 낸다(완전탐색)
// 2. 만들어진 문자열을 set 자료형에 추가한다. 중복 문자열은 추가되지 않는다.