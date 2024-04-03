"use strict";

const btnChange = document.querySelector(".btn__change");

btnChange.addEventListener("click", () => {
  btnChange.style.backgroundColor = "#0000ff";
});


const headingElement = document.getElementById("myHeading");
const addStylesButton = document.getElementById("addStylesButton");

addStylesButton.addEventListener("click", function () {
    headingElement.classList.add("highlighted");
});

const inputData = document.querySelector(".input");

const submitBtn = document.querySelector(".send");

submitBtn.addEventListener( "click", () => {
    const inputValue = inputData.value;

    alert("Ви ввели : " + inputValue );

    inputData.value = '';
});