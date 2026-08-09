// Use data such as:
// const users = [
//   { name: "Ankita", age: 32, role: "developer" },
//   { name: "Rahul", age: 28, role: "designer" },
//   { name: "Maya", age: 35, role: "developer" }
// ];
// Then solve:
//_______________________________________________________________________
// Find users older than 30.
//METHOD:1
let users = [
  { name: "Ankita", age: 32, role: "developer" },
  { name: "Rahul", age: 28, role: "designer" },
  { name: "Maya", age: 35, role: "developer" }
];
for (let i = 0; i < users.length ; i++){
  if (users[i].age > 30){
    console.log(users[i].name);
  }
  
}
//METHOD:2
let users = [
  { name: "Ankita", age: 32, role: "developer" },
  { name: "Rahul", age: 28, role: "designer" },
  { name: "Maya", age: 35, role: "developer" }
];

let olderUsers = users
  .filter(user => user.age > 30)
  .forEach(user => console.log(user.name));
console.log(olderUsers);


//_____________________________________________________________________________
// Find all developers.
// Find all developers.
let users = [
  { name: "Ankita", age: 32, role: "developer" },
  { name: "Rahul", age: 28, role: "designer" },
  { name: "Maya", age: 35, role: "developer" }
];

let developers = users.filter(user => user.role === "developer");
developers.forEach(developer => console.log(developer.name));
//-------------------------------------------------------------------------------------------------
let users = [
  { name: "Ankita", age: 32, role: "developer" },
  { name: "Rahul", age: 28, role: "designer" },
  { name: "Maya", age: 35, role: "developer" }
];

let nameList = users.map( user => user.name);
console.log(nameList);
//--------------------------------------------------------------------------------------------------------
// Calculate average age.
let users = [
  { name: "Ankita", age: 32, role: "developer" },
  { name: "Rahul", age: 28, role: "designer" },
  { name: "Maya", age: 35, role: "developer" }
];
let sum = 0;
users.forEach(user => sum += user.age);
console.log(sum);
console.log("Average:",sum/users.length)
//--------------------------------------------------------------------------------------------------------
// Find the oldest user.
let users = [
  { name: "Ankita", age: 32, role: "developer" },
  { name: "Rahul", age: 28, role: "designer" },
  { name: "Maya", age: 35, role: "developer" }
];

let oldestUser = users[0];


for (let user of users){
  if (user.age > oldestUser.age){
    oldestUser = user;
  }
}
console.log(oldestUser);
//--------------------------------------------------------------------------------------------------------
// Find users with a particular role.

let users = [
  { name: "Riya", age: 26, role: "developer" },
  { name: "Arjun", age: 31, role: "tester" },
  { name: "Neha", age: 29, role: "designer" },
  { name: "Vikram", age: 34, role: "developer" },
  { name: "Sana", age: 27, role: "manager" }
];

let testerUser = users.filter(user => user.role ==="tester").map(user =>user.name);
console.log(testerUser);
//-----------------------------------------------------------------------------------------------------
// Count users by role.
// Sort users by age.
// Find duplicate names.
// Group users by role.
