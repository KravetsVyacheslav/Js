"usw strict";

const sigleBtn = document.querySelector(".btn--single");
const multipleBtn = document.querySelector(".btn--multiple");

function handleClick() {
  alert("Click!");
}

sigleBtn.addEventListener("click", handleClick);

multipleBtn.addEventListener("click", () => {
  alert("Second callBack!");
});

multipleBtn.addEventListener("click", () => {
  alert("Second callBack!");
});

multipleBtn.addEventListener("click", () => {
  alert("Second callBack!");
});

/* multipleBtn.onClick = function() {
    alert('Thanks')
} */

const addBtn = document.querySelector('[data-action="add"] ');
const remuveBtn = document.querySelector('[data-action="remuve"] ');
const btn = document.querySelector("#btn ");

addBtn.addEventListener("click", (event) => {
  console.log(event.type);
  console.log(event.target);
  console.log(event.this);

  console.log(event);

  btn.removeEventListener("click", handleClick);
});
remuveBtn.addEventListener("click", () => {
  btn.removeEventListener("click", handleClick);
});

//event.target – “цільовий” елемент, який ініціював подію, він не змінюється в процесі спливання.
//this – “поточний” елемент, той, на якому в даний момент виконується обробник.

const link = document.querySelector(".link");
link.addEventListener("click", function (event) {
  event.preventDefault();
});
