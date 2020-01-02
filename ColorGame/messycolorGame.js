//3 is Easy mode and 6 if Hard mode
// var numSquares = 6;
//Generates a Random Color for each square
// var colors = generateRandomColors(numSquares);
    //Test to see if program works when two tiles have the same color
    //var colors = ["rgb(255, 0, 0)", "rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 0)", "rgb(255, 0, 255)",]
//Calls pickColor to pick right answer from colors array
// var pickedColor = pickColor();

var numSquares;
var colors;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBTN = document.getElementById("reset");
// var easyBTN = document.getElementById("easy");
// var hardBTN = document.getElementById("hard");
var difficultyBTNS = document.querySelectorAll(".difficulty");

init();

function init() {
    //3 is Easy and 6 is Hard (Default is Hard)
    numSquares = 6;
    //Sets the values for colors, pickedColor and changes the square colors
    resetStuff();
    //Displays rgb string in h1
    colorDisplay.textContent=colors[0];

    //Squares: Adds listeners
    for (var i=0; i < squares.length; i++) {
        //Add click listeners to each square
        squares[i].addEventListener("click", function(){
            //Get color of clicked square
            var clickedColor = this.style.backgroundColor
            //Compare color of clicked square to pickedColor
            if (clickedColor === pickedColor) {
                //Changes each squares backgroundColor to pickedColor if right
                changeToPickedColor();
                //Changes h1 backgroundColor to pickedColor if right
                h1.style.backgroundColor = pickedColor;
                //Changes message
                message.textContent="Correct!";
                resetBTN.textContent = "Play Again?";
            }
            else {
                //Changes clicked square backgroundColor to match background, making it "dissapear"
                this.style.backgroundColor = "#232323";
                //Changes message
                message.textContent="Try again.";
            }
        });
    }

    //"NEW COLORS" button: Adds listeners
    resetBTN.addEventListener("click", resetStuff);

    //Difficulty buttons: Adds listeners
    for (var i=0; i < difficultyBTNS.length; i++) {
        difficultyBTNS[i].addEventListener("click", function(){
            difficultyBTNS[0].classList.remove("selected");
            difficultyBTNS[1].classList.remove("selected");
            this.classList.add("selected");
            console.log(this.textContent);

            //If === is true, then numSquares=3 else numSquares=6
            this.textContent == "Easy" ? numSquares = 3: numSquares = 6;
            resetStuff();
        });
    }
}

//"EASY" button
// easyBTN.addEventListener("click", function(){changeDifficulty(this)});

//"HARD" button
// hardBTN.addEventListener("click", function(){changeDifficulty(this)});

// for (var i=0; i < difficultyBTNS.length; i++) {
//     difficultyBTNS[i].addEventListener("click", function(){
//         difficultyBTNS[0].classList.remove("selected");
//         difficultyBTNS[1].classList.remove("selected");
//         this.classList.add("selected");
//         console.log(this.textContent);
        
//         //If === is true, then numSquares=3 else numSquares=6
//         this.textContent == "Easy" ? numSquares = 3: numSquares = 6;
//         resetStuff();
        
//         // if (this.textContent == "Easy") {
//         //     //Changes number of squares to 3 (EASY)
//         //     numSquares=3;
//         //     //Resets Game
//         //     resetStuff();
//         //     //Hides bottom 3 squares
//         //     for (var i=3; i < squares.length; i++) {
//         //         squares[i].style.display = "none";
//         //     }
//         // }
//         // else {
//         //     //Changes number of squares to 6 (HARD)
//         //     numSquares=6;
//         //     //Resets Game
//         //     resetStuff();
//         //     for (var i=3; i < squares.length; i++) {
//         //         squares[i].style.display = "block";
//         //     }
//         // }
//     });
// }

//FUNCTIONS

//Picks  random color from color[] to be pickedColor
function pickColor() {
    //Generates a random number from [0,colors.length) and rounds down so [0,colors.length-1]
    var randNum = Math.floor(Math.random() * colors.length);
    console.log(randNum);
    return colors[randNum];
}

//Generates num random rgb strings and returns them in an array
function generateRandomColors(num) {
    //Make an array with num random rgb string
    var rgbArray=[];
    for (var i=0; i < num; i++) {
        //Gets rgb string from randomColor() and adds it to end of rgbArray
        rgbArray.push(randomColor());
    }
    //Returns rbgArray, containing num rgb strings
    return rgbArray;
}

//Changes color of each square to colors in colors[]
function changeSquareColors() {
    //Loops square.length times, which is always 6
    for (var i=0; i < squares.length; i++) {
        console.log(!!colors[i]);
        //This will be true all 6 times if on HARD because colors.length==6
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        //This will be triggered for the last 3 elements of squares if on EASY because colors.length==3
        else {
            squares[i].style.display = "none";
        }
    }
}

//Changes each squares color to be pickedColor
function changeToPickedColor() {
    for (var i=0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

//Generates a random rgb string and returns it
function randomColor() {
    //Generate a random value [0,255] for each color: r, g, and b
    rValue = Math.floor(Math.random() * 256);
    gValue = Math.floor(Math.random() * 256);
    bValue = Math.floor(Math.random() * 256);
    //Format 3 values into rbg string and return
    return "rgb(" + rValue + ", " + gValue + ", " + bValue + ")"
}

//Resets everything
function resetStuff() {
    //Generates new Colors and assigns them to colors array
    colors = generateRandomColors(numSquares);
    //Pick new pickedColor from colors array
    pickedColor = pickColor();
    //Changes squares to new colors
    changeSquareColors();
    //Resets header to initial color
    h1.style.backgroundColor = "steelblue";
    //Resets messages to null
    message.textContent=null;
    //Resets Reset Button Message
    resetBTN.textContent = "NEW COLORS";
}

//Changes difficult based on which button was pressed
// function changeDifficulty(element) {
//     if (element.id == "hard") {
//         //Adds selected class to hardBTN and removes it from easyBTN
//         hardBTN.classList.add("selected");
//         easyBTN.classList.remove("selected");
//         //Changes number of squares to 6 (HARD)
//         numSquares=6;
//         //Resets Game
//         resetStuff();
//         for (var i=3; i < squares.length; i++) {
//             squares[i].style.display = "block";
//         }
//     }
//     else {
//         //Adds selected class to easyBTN and removes it from hardBTN
//         easyBTN.classList.add("selected");
//         hardBTN.classList.remove("selected");
//         //Changes number of squares to 3 (EASY)
//         numSquares=3;
//         //Resets Game
//         resetStuff();
//         //Hides bottom 3 squares
//         for (var i=3; i < squares.length; i++) {
//             squares[i].style.display = "none";
//         }
//     }
// }