let myLibrary = [];
const bookshelf = document.querySelector(".content");
let i = 0;



class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(){
  let bookNode = document.createElement("div");
  const removeButton = document.createElement("button")
  removeButton.classList.add("removeBook")
  removeButton.innerHTML = "Remove"
  bookNode.classList.add("book");
  bookNode.classList.add("grid");
  bookNode.setAttribute("data-index", `${i}`);

  const title = document.getElementById("title").value;
  let titleNode = document.createElement("h5");
  titleNode.innerHTML = `TITLE: ${title}`;

  const author = document.getElementById("author").value;
  let authorNode = document.createElement("h5");
  authorNode.innerHTML = `AUTHOR: ${author}`;

  const pages = document.getElementById("pages").value;
  let pageNode = document.createElement("h5");
  pageNode.innerHTML = `PAGES: ${pages}`;

  const read = document.getElementById("read").value;
  let readNode = document.createElement("h3");
  readNode.innerHTML = `READ?: ${read}${read === "Yes" ? "YES" : "NO"}`;
  


  const newBook = new Book(title, author, pages,);
  myLibrary.push(newBook);
  bookNode.appendChild(titleNode);
  bookNode.appendChild(authorNode);
  bookNode.appendChild(pageNode);
  bookNode.appendChild(readNode);
  bookNode.appendChild(removeButton);
  bookshelf.appendChild(bookNode);

  closeTheForm()
  i++;
  
}

document.addEventListener('click', (event) => {
  const remove = document.querySelector(".removeBook")
  if (event.target == remove) {
    bookshelf.removeChild(remove.parentElement)
  }
});


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
