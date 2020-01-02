var p1SCORE = document.getElementById("p1Display");
var p2SCORE = document.getElementById("p2Display");

var maxScoreDisplay = document.querySelector("p span");
var maxScoreInput = document.getElementsByTagName("input")[0];

var p1BTN = document.getElementById("p1");
var p2BTN = document.getElementById("p2");
var resetBTN = document.getElementById("reset");

maxScoreInput.addEventListener("input",function() {
	maxScoreDisplay.textContent=maxScoreInput.value;
});

p1BTN.addEventListener("click", function() {
	if (maxScoreDisplay.textContent == p2SCORE.textContent) {
		console.log("Other player won, hit reset!");
	}
	else if (maxScoreDisplay.textContent == p1SCORE.textContent) {
		console.log("This player has won, hit reset!");
	}
	else {
		p1SCORE.textContent=parseInt(p1SCORE.textContent,10)+1;
	}
	if (maxScoreDisplay.textContent == p1SCORE.textContent && (p2SCORE.classList != "winner")) {
		p1SCORE.classList.add("winner");
	}
});

p2BTN.addEventListener("click", function() {
	if (maxScoreDisplay.textContent == p1SCORE.textContent) {
		console.log("Other player won, hit reset!");
	}
	else if (maxScoreDisplay.textContent == p2SCORE.textContent) {
		console.log("This player has won, hit reset!");
	}
	else {
		p2SCORE.textContent=parseInt(p2SCORE.textContent,10)+1;
	}
	if ((maxScoreDisplay.textContent == p2SCORE.textContent) && (p1SCORE.classList != "winner")) {
		p2SCORE.classList.add("winner");
	}
});

resetBTN.addEventListener("click", function() {
	p1SCORE.classList.remove("winner");
	p2SCORE.classList.remove("winner");

	p1SCORE.textContent=0;
	p2SCORE.textContent=0;
	// maxScoreInput.value=null;
	// maxScoreDisplay.textContent="5";
});
