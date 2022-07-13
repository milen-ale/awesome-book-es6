/* eslint-disable*/

import { getBooks } from './localStorag.js';

const addBookToList = (book) => {
  const list = document.querySelector('.book-container');
  const addedBook = document.createElement('div');

  addedBook.innerHTML = `
      <p>"${book.title}" by ${book.author}</p>
      <button type="submit" class="delete">Remove</button>
    `;
  list.appendChild(addedBook);
};

const displayBooks = () => {
  const books = getBooks();
  books.forEach((book) => addBookToList(book));
};

export { addBookToList, displayBooks };
