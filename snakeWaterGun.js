let yourInput = prompt("Enter your Choice (Snake/Water/Gun): ");

let randomNumber = Math.floor(Math.random() * 3) + 1;

let item;

switch (randomNumber) {
    case 1:
        item = "Snake";
        break;

    case 2:
        item = "Water";
        break;

    case 3:
        item = "Gun";
        break;
}

alert(`Computer chose: ${item}`);

if (item == yourInput) {
    alert("Draw");
} 
else if (item == "Snake" && yourInput == "Water") {
    alert("Computer Wins, Snake beats Water 🐍💧");
}
else if (item == "Water" && yourInput == "Gun") {
    alert("Computer Wins, Water beats Gun 💧🔫");
}
else if (item == "Gun" && yourInput == "Snake") {
    alert("Computer Wins, Gun beats Snake 🔫🐍");
}
else {
    alert("You Win");
}
    
