let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer,
};
let tomHardware = {};

console.log(`lenovo `, lenovo.__proto__);

let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(`tesla `, Object.getPrototypeOf(tesla));
/*
A prototype is an object from which another object can inherit properties and methods.
In the example, lenovo uses computer as its prototype through __proto__, so even though cpu is not directly present in lenovo, 
lenovo.cpu returns 12 by searching its prototype. Similarly, Object.setPrototypeOf(tesla, genericCar) sets genericCar as the prototype of the existing tesla object, 
allowing tesla to access tyres from genericCar. Object.getPrototypeOf(tesla) is used to retrieve the prototype of tesla. 
In simple terms, JavaScript first looks for a property in the object itself, and if it doesn't find it, it searches the object's prototype chain.
*/
