const myLibrary = [];
const container = document.querySelector(".container");
const addBookBtn = document.querySelector("#addBook");
const addBookForm = document.querySelector("dialog");
const closeBookForm = document.querySelector("#dialogBtn");
const cancelBookForm = document.querySelector("#cancelDialogBtn");
const bookForm = document.querySelector("#bookForm");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function addCard(book, container) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("Order", myLibrary.indexOf(book));

    const title = document.createElement("h1");
    title.textContent = book.title;
    card.appendChild(title);

    const author = document.createElement("p");
    author.textContent = book.author;
    card.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = "Pages: "+book.pages;
    card.appendChild(pages);

    const hasBeenRead = document.createElement("button");
    hasBeenRead.textContent = book.read ? "read" : "not read yet";
    card.appendChild(hasBeenRead);

    hasBeenRead.addEventListener("click", () => {
        myLibrary[removeBtn.parentElement.getAttribute("Order")].read ? myLibrary[removeBtn.parentElement.getAttribute("Order")].read = false : myLibrary[removeBtn.parentElement.getAttribute("Order")].read = true;
        hasBeenRead.textContent = book.read ? "read" : "not read yet";
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove Book";
    card.appendChild(removeBtn);

    removeBtn.addEventListener("click", () => {
        myLibrary.splice(removeBtn.parentElement.getAttribute("Order"), 1);
        removeBtn.parentElement.remove();
    });

    container.appendChild(card);
}

const everythigEverything = new Book("Everything, Everything", "Nicola Yoon", "306", true);
const thePowerOfHabit = new Book("The Power Of Habit", "Charles Duhigg", 371, false);

addBookToLibrary(everythigEverything);
addBookToLibrary(thePowerOfHabit);
myLibrary.forEach((item) => {
    addCard(item, container);
});

addBookBtn.addEventListener("click", () => addBookForm.showModal());
cancelBookForm.addEventListener("click", () => {
    bookForm.reset();
    addBookForm.close();
});

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newBook = new Book(title.value, author.value,  pages.value, read.checked);
    addBookToLibrary(newBook);
    addCard(newBook, container);
    bookForm.reset();
    addBookForm.close();
});

