function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(["Mango", "Poly", "Ajax"]);

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  const wordCount = words.length;
  const totalPrice = wordCount * pricePerWord;
  return totalPrice;
}

const totalPrice = calculateEngravingPrice("Hello world", 10);
console.log(totalPrice);

function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

const longest = findLongestWord("Вчителька Юлія найкращя");
console.log(longest);

function formatString(string) {
  const maxLength = 40;
  if (string.length <= maxLength) {
    return string;
  } else {
    return string.slice(0, maxLength) + "...";
  }
}

const formatted = formatString(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
);
console.log(formatted);

function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

const isSpam = checkForSpam("Отримайте знижку на цей розпродаж!");
console.log(isSpam);

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введіть номер:");
  if (isNaN(input)) {
    alert("Недійсне введення, введіть число.");
  } else {
    numbers.push(Number(input));
  }
} while (input !== null);

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Total sum: ${total}`);
}

function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return "Помилка! Логін має містити від 4 до 16 символів.";
  }

  if (!isLoginUnique(allLogins, login)) {
    return "Помилка! Логін вже зайнятий.";
  }

  allLogins.push(login);
  return "Логін успішно додано.";
}

const logins = ["Mango", "Poly", "Ajax"];
const newLogin = "Poly";
const result = addLogin(logins, newLogin);
console.log(result);
