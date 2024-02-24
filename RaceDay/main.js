let raceNumber = Math.floor(Math.random() * 1000);
let early = false;
let age="16";
if (early===true && age>=18){
  raceNumber += 1000;
}

if (age>=18 && early===true){
  console.log(`Your race time = 9:30 and your racenumber is ${raceNumber}`);
} else if (age>=18 && early===false){
  console.log(`Your race time = 11:00 and your racenumber is ${raceNumber}`);
} else if (age<18){
  console.log(`Youth registrants run at 12:30 pm (regardless of registration. Racenumber  ${raceNumber}`);
} else {
  console.log("See the Registration Desk");
}

