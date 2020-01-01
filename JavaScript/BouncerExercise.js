var age=prompt("What is your age?");

if (age < 0) {
    console.log("ERROR, invalid age entered!")
}
else if (age < 18) {
    console.log("You may not enter!");
}
else if (age < 21) {
    console.log("You may enter, but you may not drink!");
}
else if (age == 21) {
    console.log("Happy 21st Birthday!");
    console.log("You may enter and drink!");
}
else {
    console.log("You may enter and drink!");
}

if (age % 2 != 0) {
    console.log("You age is odd!");
}

if (Math.sqrt(age) % 1 == 0) {
    console.log("Perfect Square!");
}