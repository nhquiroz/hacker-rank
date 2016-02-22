function displayInformation() {
     // var library is defined, use it to print the information
    for (book in library) {
        if (library[book].readingStatus) {
            console.log("Already read '" + library[book].title + "' by " + library[book].author + ".");
        } else {
            console.log("You still need to read '" + library[book].title + "' by " + library[book].author + ".");
        }
    }
} 


// tail starts here
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

displayInformation();
