//User input number
var num=prompt("Guess a number!");

//Generate random number here
var randNum=Math.floor(Math.random() * 10);

//Loop boolean variable
var loop=true;

//Loops checks if below, above, or equal. If equal, it generates a new randNum and repeats
while (loop) {
    if (num == "Exit" || num == "exit") {
        alert("Exiting!")
        loop=false;
    }
    else if (num < randNum) {
        alert("Too low!");
        num=prompt("Guess a number!");
    }
    else if (num > randNum) {
        alert("Too high!");
        num=prompt("Guess a number!");
    }
    else {
        alert("You got it!");
        randNum=Math.floor(Math.random() * 10);
        num=prompt("Guess a number!");
    }
}
