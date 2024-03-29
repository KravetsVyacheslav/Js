let selectedBeverage = document.getElementById("beverage");
let message = "";
selectedBeverage.addEventListener("change", () => {
  switch (selectedBeverage.value) {
    case "coffee":
      message = "Ви обрали каву.";
      break;
    case "tea":
      message = "Ви обрали чай.";
      break;
    case "juice":
      message = "Ви обрали сік.";
      break;
    default:
      message = "Будь ласка, оберіть напій.";
  }
  document.getElementById("message").innerText = message;
});

let checkDayBtn = document.getElementById("checkDayBtn");

checkDayBtn.addEventListener("click", function () {
  let dayInput = document.getElementById("dayInput").value.toLowerCase();
  let resultDiv = document.getElementById("result_1");
  let message = "";

  switch (dayInput) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п'ятниця":
      message = "Це робочий день.";
      break;
    case "субота":
    case "неділя":
      message = "Це вихідний день.";
      break;
    default:
      message = "Введено неправильний день тижня.";
  }

  resultDiv.innerText = message;
});

let checkSeasonBtn = document.getElementById("checkSeasonBtn");

checkSeasonBtn.addEventListener("click", function () {
  let monthInput = parseInt(document.getElementById("monthInputSeason").value);
  let resultDiv = document.getElementById("result_2");
  let season = "";

  switch (monthInput) {
    case 1:
    case 2:
    case 12:
      season = "зима";
      break;
    case 3:
    case 4:
    case 5:
      season = "весна";
      break;
    case 6:
    case 7:
    case 8:
      season = "літо";
      break;
    case 9:
    case 10:
    case 11:
      season = "осінь";
      break;
    default:
      season = "неправильно введений місяць";
  }

  resultDiv.innerText = "Цей місяць належить до пори року: " + season;
});

let checkDaysBtn = document.getElementById("checkDaysBtn");

checkDaysBtn.addEventListener("click", function () {
  let monthInput = parseInt(document.getElementById("monthInputDays").value);
  let resultDiv = document.getElementById("result_3");
  let daysInMonth = "";

  switch (monthInput) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      daysInMonth = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      daysInMonth = 30;
      break;
    case 2:
      daysInMonth = 28; // Упрощено, не учитываем високосный год
      break;
    default:
      daysInMonth = "Неправильно введений місяць";
  }

  resultDiv.innerText = "У цьому місяці " + daysInMonth + " днів.";
});

let checkColorBtn = document.getElementById("checkColorBtn");

checkColorBtn.addEventListener("click", function () {
  let colorInput = document.getElementById("colorInput").value.toLowerCase();
  let resultDiv = document.getElementById("result_4");
  let action = "";

  switch (colorInput) {
    case "червоний":
      action = "стоп";
      break;
    case "зелений":
      action = "йти";
      break;
    case "жовтий":
      action = "чекати";
      break;
    default:
      action = "невідома дія";
  }

  resultDiv.innerText = "Дія за кольором " + colorInput + ": " + action;
});

const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result_5");

calculateBtn.addEventListener("click", function () {
  const num1Value = parseFloat(document.getElementById("num1").value);
  const num2Value = parseFloat(document.getElementById("num2").value);
  const operationValue = document.getElementById("operation").value;

  let result = 0;
  switch (operationValue) {
    case "add":
      result = num1Value + num2Value;
      break;
    case "subtract":
      result = num1Value - num2Value;
      break;
    case "multiply":
      result = num1Value * num2Value;
      break;
    case "divide":
      if (num2Value === 0 || isNaN(num2Value)) {
        resultDiv.textContent = "Попередження: ділення на нуль або введіть коректне число!";
        return;
      }
      result = num1Value / num2Value;
      break;
    default:
      resultDiv.textContent = "Невідома операція";
      return;
  }

  resultDiv.textContent = "Результат: " + result;
});