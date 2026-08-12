//1. Find users older than 30, Return the complete user objects.
let users = [
  {name: "Ankita", age: 32, role: "Frontend Developer"},
  {name: "Rahul", age: 28, role: "Backend Developer"},
  {name: "Priya", age: 35, role: "UI/UX Designer"},
  {name: "Amit", age: 30, role: "Full Stack Developer"},
  {name: "Sneha", age: 27, role: "Data Analyst"}
];

let user30plus = users.filter(user => user.age > 30 );
console.log(user30plus);
