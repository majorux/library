let myLibrary = [];


class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}
function addBookToLibrary(){
  let name = document.getElementById('name');
  let author = document.getElementById('author');
  let pages = document.getElementById('pages');

  name =  name.innerText;
  author = author.innerText;
  pages = pages.innerText;
  
  let newBook = new Book("name", "author", "pages");
  myLibrary.push(newBook);

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
