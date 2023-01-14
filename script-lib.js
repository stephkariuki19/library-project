let library =[];
const cardContainer = document.querySelector("#card-container")
const addBtn = document.querySelector(".add")
const closeBtn = document.querySelector("#close-btn")
const form = document.querySelector("form")
const formContainer = document.querySelector("#form-container")
const addBook = (ev)=>{
    ev.preventDefault();
    let book ={
        title: document.querySelector("#title").value,
        author:document.querySelector("#author").value,
        pages:document.querySelector("#pages").value
    }
    library.push(book)
    document.querySelector("form").reset();
    //or document.forms[0].reset(); to clear the form for the next entries
    console.warn("added",{library})
    
    //let pre = document.querySelector("#msg ");
    //pre.textContent = '\n' + JSON.stringify(library,'\t',2)
     const myCard=document.createElement("div")
     myCard.classList.add("card")
     const cardCloseBtn = document.createElement("button")
     
     const statusBtn = document.createElement("button")

     //myCard.innerText = book.title +"\n" + book.author +"\n" + book.pages
     const titleText = document.createElement("h2")
     const authorText = document.createElement("h2")
     const pagesText= document.createElement("h2")
     titleText.classList.add("card-text")
     authorText.classList.add("card-text")
     pagesText.classList.add("card-text")
     cardCloseBtn.classList.add("card-close")
     statusBtn.classList.add("status")
     titleText.innerText = "Title : "+ book.title
     authorText.innerText = "Author :   "+ book.author
     pagesText.innerText = "Pages :  "+book.pages
     cardCloseBtn.innerHTML = "REMOVE"
     statusBtn.innerHTML = "HAVE READ"
     myCard.appendChild(titleText)
     myCard.appendChild(authorText)
     myCard.appendChild(pagesText)
     myCard.appendChild(cardCloseBtn)
     myCard.appendChild(statusBtn)
     cardContainer.appendChild(myCard)
     cardCloseBtn.addEventListener("click",()=>{
        myCard.remove()
    })
    function toggletext(){
        if(statusBtn.innerHTML==="HAVE READ"){
            statusBtn.innerHTML = "NOT READ"
        } else statusBtn.innerHTML = "HAVE READ"
        }
        statusBtn.addEventListener("click",toggletext)
}
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("btn").addEventListener("click",addBook)
})

closeBtn.addEventListener("click",()=>{
    form.remove();
})
addBtn.addEventListener("click",()=>{
    formContainer.appendChild(form)
})
