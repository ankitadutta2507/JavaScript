//find_multiples_of_10.js
let maxNum = 100;
let arr = [];
for (let i = 1; i <= maxNum; i++){
    if (i % 10 === 0){
        arr.push(i);
    }
}

console.log(arr);
