"use strict";

function checkFields() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  if (input1 && input2) {
    alert("Обидва поля заповнені");
  } else {
    alert("Поля не заповнені");
  }
}

function checkSum() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let sum = num1 + num2;
  if (sum > 10) {
    alert("Сума більша за 10");
  } else {
    alert("Сума менша 10");
  }
}

function checkText() {
  let text = document.getElementById("textInput").value;
  if (text.includes("JavaScript")) {
    alert("Текст містить слово JavaScript");
  } else {
    alert("Текст не містить слово JavaScript");
  }
}

function checkNumber() {
  let number = parseInt(document.getElementById("numberInput").value);
  if (number > 10 && number < 20) {
    alert("Число входить в діапазон від 10 до 20");
  } else {
    alert("Число не входить в діапазон від 10 до 20");
  }
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (
    name.length >= 3 &&
    email.includes("@") &&
    email.includes(".") &&
    password.length >= 6
  ) {
    return true;
  } else {
    alert("Помилка: перевірте правильність заповнення форми!");
    return false;
  }
}
