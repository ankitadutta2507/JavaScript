let randomNumber = Math.floor(Math.random()*100+1); 


let num;
let noOfGuesses = 0;
while (num != randomNumber){
    num = Number.parseInt(prompt("Enter Guess Number(1-100): "));
    if (num > randomNumber){
    alert("Number is Too large");
    } else if (num < randomNumber){
    alert("Number is Too small");
    }
    else {alert("Correct Guess!");
    
    }
    noOfGuesses++;
    
}
alert(`Correct Guess!,Number is ${randomNumber} Your Score is ${100-noOfGuesses}`,);


