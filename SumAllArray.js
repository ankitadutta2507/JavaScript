//sumAll that accepts an array of two numbers
//beginner friendly

function sumAll(arr) {
  let sum = 0;
  const num1 = arr[0];
  const num2 = arr[1];
  let smallNum;
  let largeNum;
  if (num1>num2){
    smallNum = num2;
    largeNum = num1;
  } else {
    smallNum = num1;
    largeNum = num2;
  }
  for (let i = smallNum; i<= largeNum; i++){
    sum += i;
  }
  return sum;
}



//2nd method-best for interview
function sumAll(arr) {
  let sum = 0;

  const start = Math.min(arr[0], arr[1]);
  const end = Math.max(arr[0], arr[1]);

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

//using math formula.
function sumAll(arr) {
  const start = Math.min(...arr);
  const end = Math.max(...arr);

  return (end * (end + 1)) / 2 - ((start - 1) * start) / 2;
}
