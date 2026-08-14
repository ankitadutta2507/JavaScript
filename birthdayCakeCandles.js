//Given an array of candle heights, find the maximum candle height and return how many candles have that maximum height. candles = [3, 2, 1, 3]
//The tallest candle is 3, and it appears 2 times.
//2

let candles = [3,1,2,3,1];

function birthdayCakeCandles(candles) {
    // Write your code here
    let max = Math.max(...candles);
    
    // console.log(max);
    let count = candles.filter(n => n === max).length;

    return count;
    
}

birthdayCakeCandles(candles);
