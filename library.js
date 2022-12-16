const addBtn = document.querySelector('#addBtn');
const newBookBtn = document.querySelector('#newBtn');
const popUpForm = document.querySelector('#popUp');
const closePopUp = document.getElementsByTagName('span')[0];

class myBook{
    constructor(title, author, pages, read) {
        this.title = form.title.value;
        this.author = form.author.value;
        this.pages = form.pages.value + 'pgs';
        this.read = form.read.checked;
    }
}
let myLibrary = [];
let newBook; 

function addBookToLibrary(e) {
    e.preventDefault();
    popUpForm.style.display = 'none';
    newBook = new myBook(title, author, pages, read);
    myLibrary.push(newBook)
    render();
    form.reset();
}

function render() {
    const display = document.querySelector('#library-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));

    for(let i = 0; i < myLibrary.length; i++) {
        createBook(myLibrary[i]);
    }
}

function createBook(item) {
    const library = document.querySelector('#library-container');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');

    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = item.author;
    author.classList.add('author');
    bookDiv.appendChild(authorDiv);

    pageDiv.textContent = item.pages;
    pageDiv.classList.add('pages');
    bookDiv.appendChild(pageDiv);

    readBtn.classList.add('readBtn');
    bookDiv.appendChild(readBtn);
    if(item.read === false) {
        readBtn.textContent = 'Not Read';
    } else {
        readBtn.textContent = 'Read';
    }

    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('id', 'removeBtn');
    bookDiv.appendChild(removeBtn);

    library.appendChild(bookDiv);

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
        render();
    });

    readBtn.addEventListener('click', () => {
        item.read = !item.read;
        render();
    })
}


closePopUp.addEventListener('click', () => {popUpForm.style.display ='none'});
newBookBtn.addEventListener('click', () => {popUpForm.style.display = 'block'});
addBtn.addEventListener('click', addBookToLibrary)

