"use strict";

const email = "0907@gmail.com";

console.log(email.includes("@"));

console.log(email.length + " символів");


const my = "My";

const name = " name";

const is = " is ";

const fullName = ` ${my} ${name} ${is} Vyacheslav`;

console.log(fullName);


const userName = prompt("Як вас звати ?", "");

const payment = prompt("сумма покупки ?", "300");

const answer = alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
