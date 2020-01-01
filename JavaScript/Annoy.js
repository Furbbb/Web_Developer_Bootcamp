var reply=prompt("Are we there yet?");
var condition=true;


while (condition) {
    
    if (reply.indexOf("yes") >= 0  || reply.indexOf("yeah") >= 0) {
        condition=false;
        alert("Yay, we finally made it!");
    }
    else {
        reply=prompt("Are we there yet?");
    }
}