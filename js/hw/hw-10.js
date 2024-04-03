"use strict";

const openModalButton = document.querySelector('[data-action="open-modal"]');
const closeModalButton = document.querySelector('[data-action="close-modal"]');
const modalBackdrop = document.querySelector('.backdrop');

openModalButton.addEventListener('click', () => {
/*   modalBackdrop.classList.add('show-modal'); */
document.body.classList.add('show-modal')
});

closeModalButton.addEventListener('click', () => {
/*   modalBackdrop.classList.remove('show-modal'); */
document.body.classList.remove('show-modal')
});

modalBackdrop.addEventListener('click', (event) => {
  if (event.target === modalBackdrop) {
    modalBackdrop.classList.remove('show-modal');
  }
});

const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  if (nameInput.value.trim() === '') {
    nameOutput.textContent = 'незнайомець';
  } else {
    nameOutput.textContent = nameInput.value;
  }
});

const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('input', () => {
  const inputLength = validationInput.value.length;
  const requiredLength = parseInt(validationInput.getAttribute('data-length'));

  if (inputLength === requiredLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});

const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

fontSizeControl.addEventListener('input', () => {
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
});