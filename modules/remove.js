/* eslint-disable*/

const deleteBook = (el) => {
  if (el.classList.contains('delete')) {
    el.parentElement.remove();
  }
};

const clearFields = () => {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
};

export { deleteBook, clearFields };
