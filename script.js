let myLibrary = [];
let bookshelf = document.q


class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const title = document.querySelector('#title').value;
const author = document.querySelector('#pages');
const pages = document.querySelector('#pages');

function addBookToLibrary(i){
  let bookNode = document.createElement("div");
  bookNode.classList.add("book");
  bookNode.setAttribute("data-index", `${i}`);

  const title = document.getElementById("title").value;
  let titleNode = document.createElement("h2");
  titleNode.innerHTML = `Title: ${title}`;

  const author = document.getElementById("author").value;
  let authorNode = document.createElement("h3");
  authorNode.innerHTML = `Author: ${author}`;

  const pages = document.getElementById("pages").value;
  let pageNode = document.createElement("h3");
  pageNode.innerHTML = `Pages: ${pages}`;

  //const read = document.getElementById("read").value;
  //let readNode = document.createElement("h3");
  //readNode.innerHTML = `Read? ${read}${read === "Yes" ? "😃" : "😢"}`;
  

  let newBook = new Book(title, author, pages,);
  myLibrary.push(newBook);
  bookNode.appendChild(titleNode);
  bookNode.appendChild(authorNode);
  bookNode.appendChild(pageNode);
  //bookNode.appendChild(readNode);
  //bookshelf.appendChild(bookNode);
  
}


function Remove(){
  let index = e.target.getElementByClassName("table");
  index = index.dataset.index; 
  myLibrary.splice(index, 1);
}

function openTheForm() {
  document.querySelector(".formOpaque").style.margin = "0%";
}

function closeTheForm() {
  document.querySelector(".formOpaque").style.margin = "100%";
}

window.onclick = function (event) {
  let modal = document.querySelector('.formOpaque');
  if (event.target == modal && event.target != document.querySelector(".formContainer")) {
    closeTheForm();
  }
}
