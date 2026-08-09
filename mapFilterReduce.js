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
//_______________________________________________________________
// Calculate the average using reduce().
let num = [34, 21, 52, 95, 46, 66];

let sumAll = num.reduce((res,curr) => {
    return res + curr;
    },0);

let average = sumAll / num.length;
console.log("Average of all numbers:",average);
//_______________________________________________________________
// Find the maximum using reduce().
//??
//_______________________________________________________________

let num = [91, 92, 95, 95, 91, 92, 95, 93, 96, 97, 93, 99, 92, 95, 98];

let result = {};

for (let n of num) {
    if (result[n]) {
        result[n]++;
    } else {
        result[n] = 1;
    }
}

console.log(result);
//_______________________________________________________________

// Convert an array of objects into an object indexed by ID.
let users = [
    { id: 101, name: "Ankita", age: 32 },
    { id: 102, name: "Rahul", age: 28 },
    { id: 103, name: "Priya", age: 25 }
];
let userObj = {};
for (let user of users){
    userObj[user.id] = user;
}
console.log(userObj);
//_______________________________________________________________
// Calculate total price from a shopping cart.
let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 800, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 }
];

let totalPrice = 0;

for (let item of cart){
    totalPrice += (item.price * item.quantity);
}

console.log(totalPrice);
//using reduce-->
let totalPrice = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);

console.log(totalPrice);
//_______________________________________________________________

// Find the most expensive product.
let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 800, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 },
    { name: "Macbook", price: 120000, quantity: 1},
];

let mostExp = cart[0];

for (let item of cart) {
    if (item.price > mostExp.price) {
        mostExp = item;
    }
}

console.log("Most Expensive product:",mostExp.name);
//_______________________________________________________________
// Find products under ₹500.
let stationery = [
    { id: 101, name: "Notebook", price: 120, quantity: 5 },
    { id: 102, name: "Pen Set", price: 250, quantity: 10 },
    { id: 103, name: "Pencil Box", price: 180, quantity: 4 },
    { id: 104, name: "Highlighter Set", price: 350, quantity: 6 },
    { id: 105, name: "Sketch Pens", price: 450, quantity: 3 },

    { id: 106, name: "Desk Organizer", price: 650, quantity: 2 },
    { id: 107, name: "Premium Notebook", price: 750, quantity: 4 },
    { id: 108, name: "Geometry Kit", price: 850, quantity: 3 },
    { id: 109, name: "Calculator", price: 1200, quantity: 2 },
    { id: 110, name: "Drawing Board", price: 1500, quantity: 1 }
];


let inexpensiveProd = [];

for (let item of stationery) {
    if (item.price < 500){
        inexpensiveProd.push(item.name);
    }
}
console.log(inexpensiveProd);
//____________________________COMPLETED_______________________________________
