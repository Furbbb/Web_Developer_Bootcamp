var btn = document.getElementById("btn");

//Method #1
// btn.addEventListener("click", function() {
//     if (document.querySelector("body").style.background == "purple") {
//         document.querySelector("body").style.background = "white";
//     }
//     else {
//         document.querySelector("body").style.background = "purple";
//     }
// });

//Method #2, much nicer
btn.addEventListener("click", function() {
    document.body.classList.toggle("purple");
});

/*Method #3: You could declare a bool that flips back and forth on each click
and depending on it's value, use if and else to change the background color.
Pretty much the same as Method #1
*/