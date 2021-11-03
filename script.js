
let myLibrary = [];

//create book class
function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


//function to create a section for each element of myLibrary array
let page = document.getElementById("libraryShelf");

function displayLibrary()
{ let book = document.createElement("DIV");
    if (page.contains(book)) {
        page.remove();
    }
    for (let index = 0; index < myLibrary.length; index++) {
        const element = myLibrary[index];
        
        //make a template literal for the html
        let code = `
        <h2>Title: ${element.title}</h2>
        <p>Author: ${element.author}</p>
        <p>Pages: ${element.pages}</p>
        <p>Read: ${element.read}</p>
        <button id="remove${index}" onclick="removeFromLibrary(${index})">Remove</button>
        `
        book.innerHTML = code;
        page.appendChild(book);  
        //create event listener for the elements button
        // document.getElementById(`remove${index}`).addEventListener("click", removeFromLibrary)      
    }
}

//up to this - removing items from the array and display!
function removeFromLibrary(index)
{
    myLibrary = myLibrary.slice(index, 1);
    displayLibrary();
    
}

//add new book form appear/dissapear
let poppedup = true;
function addBook()
{
    if (poppedup) {
        console.log("working");
    document.getElementById("popup").style = "display:inherit"
    poppedup = false;

    }
    else if (!poppedup) {
        
        document.getElementById("popup").style = "display:none";
        poppedup = true;
    }    
    
}

//get form data when submitted, apply to new book 
let form = document.getElementById("form");
let i = 0;


function addBookToLibrary(i)
{
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    i = new Book(title, author, pages, read);
    
    myLibrary.push(i)
    displayLibrary();
    i++
     

}


