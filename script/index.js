/* eslint-disable*/

import { addBookToList, displayBooks } from '../modules/bookAdd.js';
import { addBook } from '../modules/localStorag.js';
import { deleteBook, clearFields } from '../modules/remove.js';
import { DateTime } from '../modules/luxons.js';

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

document.addEventListener('DOMContentLoaded', displayBooks);
document.querySelector('form').addEventListener('submit', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);
  addBookToList(book);
  addBook(book);
  clearFields();
});
document.querySelector('.book-container').addEventListener('click', (e) => {
  deleteBook(e.target);
});

const listLink = document.querySelector('.list');
const addNew = document.querySelector('.add_new');
const contact = document.querySelector('.contact');
const listMain = document.querySelector('.list-main');
const formContainer = document.getElementById('add-book');
const contactPage = document.querySelector('.contact-us');

document.addEventListener('DOMContentLoaded', () => {
  listMain.classList.remove('hide');
  formContainer.classList.add('hide');
  contactPage.classList.add('hide');
});
listLink.addEventListener('click', () => {
  listMain.classList.remove('hide');
  formContainer.classList.add('hide');
  contactPage.classList.add('hide');
});

addNew.addEventListener('click', () => {
  listMain.classList.add('hide');
  formContainer.classList.remove('hide');
  contactPage.classList.add('hide');
});

contact.addEventListener('click', () => {
  listMain.classList.add('hide');
  formContainer.classList.add('hide');
  contactPage.classList.remove('hide');
});

document.querySelector('.date-p').innerHTML = DateTime.now().toLocaleString(
  DateTime.DATETIME_FULL
);
