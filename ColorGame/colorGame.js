var numSquares; //number of Squares on screen (Hard=6 and Easy=3)
var colors; //Array holding numSquares rgb strings
var pickedColor; //The rgb string from colors that is the answer
var squares = document.querySelectorAll(".square"); //Selects all 6 square objects
var colorDisplay = document.getElementById("colorDisplay"); //Selects the rgb(r, g, b) in the h1
var message = document.getElementById("message"); //Selects the span that says "Correct!" or "Try Again."
var h1 = document.querySelector("h1"); //Selects the h1 element
var resetBTN = document.getElementById("reset"); //Selects the reset button
var difficultyBTNS = document.querySelectorAll(".difficulty"); //Selects the 2 difficulty buttons

init();

//FUNCTIONS

//Initializes Game
function init() {
    //3 is Easy and 6 is Hard (Default is Hard)
    numSquares = 6;
    //Sets the values for colors, pickedColor and changes the square colors
    resetStuff();
    //Squares: Adds listeners
    setupSquares();
    //"NEW COLORS" button: Adds listeners
    resetBTN.addEventListener("click", resetStuff);
    //Difficulty buttons: Adds listeners
    setupDifficulty();
}

function setupSquares () {
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
}

function setupDifficulty() {
    for (var i=0; i < difficultyBTNS.length; i++) {
        difficultyBTNS[i].addEventListener("click", function(){
            difficultyBTNS[0].classList.remove("selected");
            difficultyBTNS[1].classList.remove("selected");
            this.classList.add("selected");
            //If === is true, then numSquares=3 else numSquares=6
            this.textContent == "Easy" ? numSquares = 3: numSquares = 6;
            resetStuff();
        });
    }
}

//Picks  random color from color[] to be pickedColor
function pickColor() {
    //Generates a random number from [0,colors.length) and rounds down so [0,colors.length-1]
    var randNum = Math.floor(Math.random() * colors.length);
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
    //Displays rgb string in h1
    colorDisplay.textContent=pickedColor;
    //Resets messages to null
    message.textContent=null;
    //Resets Reset Button Message
    resetBTN.textContent = "NEW COLORS";
}