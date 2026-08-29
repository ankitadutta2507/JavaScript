function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Camry");
// console.log(myCar);

let myNewCar = Car("Tata", "Safari");
// console.log(myNewCar);
//_______________________________________________________________________
function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a cup of ${this.type}`;
  };
}
let lemonTea = new Tea("lemon tea");
// console.log(lemonTea.describe());
//_______________________________________________________________________
function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.sound());

let cat = new Animal("cat");
console.log(cat.sound());
// // This code demonstrates constructor functions, the new keyword, this, and prototypes in JavaScript. The Animal function acts as a constructor that creates 
// objects with a species property using this.species = species. The sound() method is added to Animal.prototype, which means all objects created using new Animal() 
// can share this method instead of each object having its own copy. When let dog = new Animal("Dog") is created, this refers to the new dog object, so dog.species 
// becomes "Dog", and dog.sound() returns "Dog makes a sound". Similarly, let cat = new Animal("cat") creates another object with species as "cat", and cat.sound() 
// returns "cat makes a sound". In short, new creates the object, this sets its properties, and the prototype provides shared methods to all objects created from the 
// constructor.
//_______________________________________________________________________
function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}
let tea = new Drink("tea");
let coffee = Drink("coffee");
// // This code demonstrates the use of new.target to make sure a constructor function is called with the new keyword. Inside the Drink function, new.target checks 
// whether the function was called using new; if it wasn't, new.target is undefined, so the code throws an error saying "Drink must be called with new keyword". 
// When let tea = new Drink("tea") is executed, new.target is Drink, so the object is created successfully and this.name becomes "tea". 
// However, let coffee = Drink("coffee") calls Drink without new, so the condition !new.target becomes true and an error is thrown. 
// In short, new.target is used here to ensure that Drink can only be used as a constructor with the new keyword.
