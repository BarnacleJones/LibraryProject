//create an object

/*
function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function info()
    {
        let information;
        let readornot;
        if (read) {readornot = "has";}
        else{readornot = "has not";}
        information = this.title + " by " + this.author + " is " + this.pages + " pages long, and " + readornot + " been read."
        return information;
    }
}

const coderbook = new Book("How to fuck up shit", "Ben Jones", 134, false)

console.log(coderbook.info());
*/




//using the new way for prototypal inheritance!
/*
function Book()
{

}

Book.prototype.info = function()
{
    let information;
    let readornot;
    if (this.read) {readornot = "has";}
    else{readornot = "has not";}
    information = this.title + " by " + this.author + " is " + this.pages + " pages long, and " + readornot + " been read."
    return information;
}

function LibraryBook(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//use object.create
//Object.create very simply returns a new object
//with the specified prototype and any additional properties you want to add
LibraryBook.prototype = Object.create(Book.prototype);

const coderbook = new LibraryBook("How to fuck up shit", "Ben Jones", 134, false)

console.log(coderbook.info());
console.log(coderbook.title)
*/

let myLibrary = [];

function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.addBookToLibrary = function()
{
    myLibrary.push(this.info())
}

Book.prototype.info = function()
{
    let information;
    let readornot;
    if (this.read) {readornot = "has";}
    else{readornot = "has not";}
    information = this.title + " by " + this.author + " is " + this.pages + " pages long, and " + readornot + " been read."
    return information;
}

//create a variable
let page = document.getElementById("libraryShelf");

function displayLibrary(inforrr)
{
    for (let index = 0; index < myLibrary.length; index++) {
        const element = myLibrary[index];
        let book = document.createElement("DIV");
        book.innerText = element;
        page.appendChild(book);        
    }
}
const book1 = new Book("ben", "benh", 42, true);
const book2 = new Book("abby", "benh", 42, true);
const book3 = new Book("ben", "benh", 42, true);
const book4 = new Book("ben", "benh", 42, true);
const book5 = new Book("ben", "benh", 42, true);

book1.addBookToLibrary();
book2.addBookToLibrary();
book3.addBookToLibrary();
book4.addBookToLibrary();
book5.addBookToLibrary();

displayLibrary();
