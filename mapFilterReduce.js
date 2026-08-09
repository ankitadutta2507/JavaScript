// Double every number.
let num = [2,5,7,8];
let double = num.map(num => num*2);
console.log(double);
//_______________________________________________________________
// Return only numbers greater than 50.

let num = [34, 21, 52, 95, 46, 66];
let fiftyPlus = num.filter(num => num > 50);
console.log("Numbers greater than 50 are:",fiftyPlus);
//_______________________________________________________________

// Calculate the sum using reduce().
let num = [34, 21, 52, 95, 46, 66];

let sumAll = num.reduce((res,curr) => {
    return res + curr;
    }, 0);

console.log(sumAll);
/_______________________________________________________________
// Calculate the average using reduce().
// Find the maximum using reduce().
// Count occurrences of each number.
// Convert an array of objects into an object indexed by ID.
// Calculate total price from a shopping cart.
// Find the most expensive product.
// Find products under ₹500.
