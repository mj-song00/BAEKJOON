const fs = require("fs");
let input = fs.readFileSync('./1436.txt').toString()
console.log(input)
let a = 666

while(true){
    if(a.toString().includes('666')){
        input -=1
        console.log(input)
        if(input==0)
            break;
    }
    
    a+=1
    console.log(a)
}

console.log(a)

//666부터 시작해서 '666'이 들어간 수는 input 에서 -1 해준다
// input이 0이 되면, 0이 된 수를 출력한다.