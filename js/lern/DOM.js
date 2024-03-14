"use strict";

/* console.log(navigator.userAgent);
console.log(location.href);

location.href =
  "https://edu.goiteens.com/uk/calendarhttps://edu.goiteens.com/uk/calendar";

const htmlElement = document.documentElement;
console.log(htmlElement);

const headElement = document.head;
console.log(headElement);

const bodyElement = document.body;
console.log(bodyElement);

const title = document.querySelector(".title");
const parentElemenNode = title.parentNode;
console.log(parentElemenNode);

const childOfList = document.querySelector(".list");
const childElemetNode = list.childNodes;
console.log(childElemetNode);

const firstChild = childOfList.firstChild;
const lastChild = childOfList.lastChildChild;

const container = document.querySelector(".container");
const firstChildElement = container.firstElementChild;
console.log("Преший дочірний елемент", firstChildElement);

const secondElementElement = firstChildElement.nextElementSibling;
console.log("Другий дочірний елемент", secondElement);
const firstParagraph = document.querySelector("p");
console.log("Перший елмент",firstParagraph )


const allParagraph = document.querySelectorAll("p");
console.log("Всі елменти",allParagraph )

const secondParagraph = document.querySelector(".second")

btnHidden.addEventListner("click", () =>{
    container.hidden = !container.hidden;
}) */

//                 part1

const btnchageValue = document.querySelector(".button--change");
const inputValue = document.querySelector(".input");

btnchageValue.addEventListener("click", () => {
  inputValue.value = "new value";
});

const btnState = document.querySelector(".btn--state");
const checkbox = document.querySelector("#checkbox");

btnState.addEventListener("click", () => {
  checkbox.checked = !checkbox.checked;
  console.log(checkbox.checked);
});

// name

const showBtnName = document.querySelector(".btn-show");
const userData = document.getElementById("userameInput");

showBtnName.addEventListener("click", () => {
  console.log(userData.name);
  console.log(userData.value);
});

let img = document.querySelector(".img");
img.addEventListener("click", () => {
  img.srs =
    "https://lh5.googleusercontent.com/p/AF1QipN_Ew3LV2NOpYJXG7xcP5GHBWfaKkjgC8iQF4-H=w148-h148-n-k-no";
});

const text = document.querySelector(".p");

text.textContent = "New text";

const example = document.querySelector(".example");
const buttonCheck = document.querySelector(".button--check");
const buttonAdd = document.querySelector(".buuton--add");
const buttonRemuve = document.querySelector(".button--remuve");
const buttonRaplace = document.querySelector(".button--raplace");
const buttonTogle = document.querySelector(".button--togle");

buttonCheck.addEventListener("click", () => {
  const hasClass = example.classList.contains("ll");
  console.log("Чи є клас 'll' в даного елемента?" + hasClass);
});

buttonAdd.addEventListener("click", () => {
  example.classList.add("italick");
});

buttonRemuve.addEventListener("click", () => {
  example.classList.remove("italick");
});

buttonRaplace.addEventListener("click", () => {
  example.classList.replace("Bolt");
});

buttonTogle.addEventListener("click", () => {
  example.classList.toggle("talick");
});

//elem.classList.toggle(cls) - якщо класу cls немає, додає його, якщо є, видаляє
//elem.classList.add(cls) - додає клас cls в список класів елемента
//elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента
//elem.classList.contains(cls) - повертає true або false, в залежності від того, чи є в елемента клас cls

buttonCheck.style.color = "green";
