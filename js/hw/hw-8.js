"use strict";

const textField = document.getElementById("textField");
const changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", function () {
  changeButton.innerText = textField.value;
});

const firstListItem = document.getElementById("list").firstElementChild;

firstListItem.textContent = "new text";
