let runAgain=true;

while(runAgain) {
    let age = Number.parseInt(prompt("What is your age? "));
    
    if (age<0) {
        console.error("age entered is negative");
    } else if (age>=18){
        alert("You can Drive");
    } else if (age<18) {
        alert("You can't Drive");
    } else {
        alert("Invalid Input")
    }
    runAgain = confirm("Do you want to see the prompt?");
}
