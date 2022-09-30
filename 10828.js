const fs = require('fs')
const input = fs.readFileSync('./10828.txt').toString().trim().split('\n')

//console.log(input[1].split(' ')[0])



// let arr = []

// for (let i=1; i < input[0]; i++){
//             if (input[i].split(' ')[0] == 'push'){
//                 arr.push(input[i].split(' ')[1])
//             }else if (input[i] == 'pop'){
//                 if (arr.length < 1){
//                    return '-1' 
//                 }else{
//                     arr.pop()
//                 }
//             }else if (input[i] == 'size') {
//                  arr.pop()
//             }else if (input[i] == 'empty'){

//             }
//     }
//     console.log(arr)


 
let stack = [];
let answer = '';
for(let i in input){
    if(input[i].split(' ').length === 1){
        if(input[i] === 'pop'){
            if(stack.length !== 0){
                answer = answer + stack.pop() + '\n';
            }else{
                answer = answer + '-1\n';
            }
        }else if(input[i] === 'size'){
            answer = answer + String(stack.length) + '\n';
        }else if(input[i] === 'empty'){
            if(stack.length === 0){
                answer = answer + '1\n';
            }else{
                answer = answer + '0\n';
            }
        }else if(input[i] === 'top'){
            if(stack.length !== 0){
                answer = answer + stack[stack.length-1] + '\n';
            }else{
                answer = answer + '-1\n';
            }
        }
    }else{
        stack.push(input[i].split(' ')[1]);
    }
}
console.log(answer);