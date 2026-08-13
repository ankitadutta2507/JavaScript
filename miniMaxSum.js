//Mini-Max sum

// 23, 51, 11, 34, 98

let arr = [];
let n = 1;
let sum5 = 0;
while (n<=5){
    let num = Number(prompt(`Enter element ${n} of 5`));
    n++;
    arr.push(num);
    sum5 += num;
}
console.log(arr);
console.log(sum5);

let maxSum = sum5-arr[0];
let minSum = sum5-arr[0];

for (let num of arr){
    
    if ((sum5 - num) > maxSum){
        maxSum = sum5 - num;
    }
    if ((sum5 - num) < minSum){
        minSum = sum5 - num;
    }
    
    
}
console.log("Max sum", maxSum);
console.log("Min sum", minSum);

