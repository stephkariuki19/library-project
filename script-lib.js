let library =[];
//creating variables
const cardContainer = document.querySelector("#card-container")
const addBtn = document.querySelector(".add")
const closeBtn = document.querySelector("#close-btn")
const form = document.querySelector("form")
const formContainer = document.querySelector("#form-container")
//book constructor
class Book {
    constructor(author, title, pages) {
        this.author = author;
        this.title = title;
        this.pages = pages;
    }
}
//new adding book function
const newAddBook =(e)=>{
    e.preventDefault();
    const bookTitle =document.querySelector("#title").value
    const bookAuthor=document.querySelector("#author").value
    const bookPages=document.querySelector("#pages").value
    let newBook = new Book(bookAuthor,bookTitle,bookPages);
    library.push(newBook);
    document.querySelector("form").reset(); //clear for new entries
    console.warn("added",{library})
    createCardElements(newBook)
}
//new function for making card elements
function createCardElements(newBook){ //add param ? + at 24?
    const myCard=document.createElement("div")
     myCard.classList.add("card")
     const cardCloseBtn = document.createElement("button")
     const statusBtn = document.createElement("button")
     const titleText = document.createElement("h2")
     const authorText = document.createElement("h2")
     const pagesText= document.createElement("h2")
     //adding relevant styling classes to elements
     titleText.classList.add("card-text")
     authorText.classList.add("card-text")
     pagesText.classList.add("card-text")
     cardCloseBtn.classList.add("card-close")
     statusBtn.classList.add("status")
     //adding text to elements
     titleText.innerText = "Title : "+ newBook.title
     authorText.innerText = "Author :   "+ newBook.author
     pagesText.innerText = "Pages :  "+newBook.pages
     cardCloseBtn.innerHTML = "REMOVE"
     statusBtn.innerHTML = "HAVE READ"
     myCard.appendChild(titleText)
     myCard.appendChild(authorText)
     myCard.appendChild(pagesText)
     myCard.appendChild(cardCloseBtn)
     myCard.appendChild(statusBtn)
     cardContainer.appendChild(myCard)

     cardCloseBtn.addEventListener("click",(selectedBook)=>{
        console.log("to be removed")
        library.splice(selectedBook,1) //is display vs current array contents  okay?
       myCard.remove()
        
     })


    function toggletext(){
        if(statusBtn.innerHTML==="HAVE READ"){
            statusBtn.innerHTML = "NOT READ"
        } else statusBtn.innerHTML = "HAVE READ"
        }
        statusBtn.addEventListener("click",toggletext)
}

//function to add book added to button
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("btn").addEventListener("click",newAddBook)
})
//removes form
closeBtn.addEventListener("click",()=>{
    
    form.remove();
})
//adds form to container
addBtn.addEventListener("click",()=>{
    formContainer.appendChild(form)
})
//default view
window.addEventListener("load", (event) => {
    form.remove();
  });
  


