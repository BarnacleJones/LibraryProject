
let myLibrary = [];

//create book class
function Book(title, author, pages, read, image)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.image = image;
}


//variables + function to create a section for each element of myLibrary array
let page = document.getElementById("libraryShelf");
let book;

function displayLibrary()
{ 
    book = document.createElement("DIV");


    //loop through the array and populate the info into div containers
    for (let index = 0; index < myLibrary.length; index++) {
        const element = myLibrary[index];        
            //make a template literal for the html
            let code = `
            <img src="${element.image}" width="250px" style="align-self: center"></img>
            <h2>Title: ${element.title}</h2>
            <p>Author: ${element.author}</p>
            <p>Pages: ${element.pages}</p>
            <p>Read: ${element.read}</p>
            <button id="remove${index}" onclick="removeFromLibrary(${index})">Remove</button>
            `
        book.innerHTML = code;
        //add id for css
        book.setAttribute("id", `bookDiv${index}`)
        page.appendChild(book);  
        }
    
}


//up to this - removing items from the array and display!
function removeFromLibrary(index)
{    
    let newArray = myLibrary.splice(index, 1);

    console.log(newArray)
    console.log(myLibrary)
    
    //works but is hacky..
    document.getElementById(`bookDiv${index}`).innerHTML = "";
}

//add new book form appear/dissapear
let poppedup = false;
function addBook()
{
    if (!poppedup) {
        //if it's not popped up but button is clicked..show box
        document.getElementById("popup").style = "display:inherit"
        poppedup = true;
        // displayLibrary();

    }
    else if (poppedup) {
        //if it was already popped up, dissapear, redraw divs
        document.getElementById("popup").style = "display:none";
        poppedup = false;
        // displayLibrary();
    }        
}

//get form data when submitted, apply to new book 
let form = document.getElementById("form");
//counter for creating individual book objects
let i = 0;


function addBookToLibrary(i)
{
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    let image;
    //if there is no image url - make default image cover photo
    if (document.getElementById("image").value === "") 
        {image = "images/book.jpg"}
    else
        {image = document.getElementById("image").value;}
    //create new object
    i = new Book(title, author, pages, read, image);
    //push book to array
    myLibrary.push(i)
    displayLibrary();
    i++
}
//prompt got annoying fast
 //let username = prompt("What is your name?")
let username = "Ben"
document.getElementById("username").innerText = username + "'s Library";
