var todos = [];
window.setTimeout(function() {
var command = prompt("Enter a command: ");
var condition = true;

while (condition) {
    if (command == "new") {
        var newNote = prompt("Enter a new note: ");
        todos.push(newNote);
        command = prompt("Enter a command: ");
    }
    else if (command == "list") {
        //For loop method
        // for (var i=0; i<todos.length; i++) {
        //     console.log(todos[i]);
        // }

        //ForEach method
        todos.forEach(function(placeholder,i){
            console.log(i + ":" + placeholder)
        });

        //Custom ForEach method
        // ourForEach(function(element){console.log(todos.indexOf(element) + ": " + element)},todos);
        command = prompt("Enter a command: ");
    }
    else if (command == "delete") {
        var deleteNote = prompt("Enter index of todo to delete: ")
        // var newArray=[];
        // for (var i=0; i<todos.length; i++) {
        //     if (i != deleteNote) {
        //         newArray.push(todos[i]);
        //     }
        // }
        // todos=newArray;
        todos.splice(deleteNote,1);
        command = prompt("Enter a command: ");
    }
    else if (command == "quit") {
        condition=false;
        alert("Quitting Program");
    }
    else {
        alert("Error: Invalid Command Entered!");
        command = prompt("Enter a command: ");
    }
}
}, 500);

function ourForEach(func,arr) {
    //For loop method
    // for (var i=0; i<arr.length; i++) {
    //     func(arr[i]);
    // }

    //While loop method
    var count=0;
    while (count < arr.length) {
        func(arr[count]);
        count++;
    }
}

/*
ForEach loop

arr.forEach(somefunction)

todos.forEach(function(placeholder){
    console.log(placeholder)
});

*/