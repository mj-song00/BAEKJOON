// d(2) = 1+1 = 2 , d(10)= 10 + 1 + 0 = 11 , d(5000) = 5+0+0+0+5000 = 5005
// 1~10000에서 윗줄 숫자들을 제거해주면 
// 셀프넘버가 나온다.

let arr = []
let answer = []

for (let i = 1; i <= 10000; i++){
   let self = 0 //셀프넘버
   let numerals = String(i) //숫자들
   for (let j = 0; j < numerals.length; j++){
    self += Number(numerals[j])
    }
    let nSelf = i + self
    arr.push(nSelf)
}
console.log(arr)

for (let i = 1; i <= 10000; i++){
    if (arr.indexOf(i) == -1) {
        answer += i + '\n'
    }
}
   

console.log(answer)