// var posts = [
//     {
//         title: "Cats are mediocre",
//         author: "Colt Steele",
//         comments: ["Awesome Post", "Terrible Post"]
//     },
//     {
//         title: "Cats are actually awesome",
//         author: "Cat Luvr",
//         comments: ["Meh Post", "Good Post"]
//     }
// ]

var movies = [
    {
        title: "Inception",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: true
    },
    {
        title: "Mad Max Fury Road",
        rating: 4.8,
        hasWatched: false
    },
    {
        title: "Cats",
        rating: 0.5,
        hasWatched: false
    }
]

for (var i=0; i<movies.length; i++) {
    if (movies[i].hasWatched) {
        console.log("You have watched \"" + movies[i].title + "\" - " + movies[i].rating + " stars");
    }
    else {
        console.log("You have not seen \"" + movies[i].title + "\" - " + movies[i].rating + " stars")
    }
}