"use strict";

const message = "Mango" + "is" + "happy";
console.log(message);

let result;

result = 5 + "5";
console.log(result);
console.log(typeof result);

result = 5 + "5" + 5;
console.log(result);
console.log(typeof result);

result = 5 / "2";
console.log(result);
console.log(typeof result);
console.log(str.indexOf("aga"));

const str = "aga OGO GO GO GG HP fsfs"; //загальна зміна

console.log(str.startsWith("a")); //true
console.log(str.endsWith("ga")); //true
console.log(str.startsWith("m")); //foulse
console.log(str.endsWith("m")); //foulse

console.log(str.slice(0, 1)); //вирізає частину тексту
console.log(str.slice(1)); // виріже від 1 до кінця
console.log(str.slice(-4, -1)); //виріже з кінця 2 3 4 і 5 числа

const text = "          sfoFDO sfSFsdf          ";
console.log(text.trim()); //видаляє пробіли пробіли перед першим символом і після останього

const title = "sfoFDO sfSFsdf";
console.log(title.padEnd(15, ")"));
console.log(title.padStart(15, ")"));

/* const nam ="Kalistrat"
const age = "141"
const mood = "borred"
const messag = "My name"  nam + "jfds" + age + "jodf" + mood */

/* const nam ="Kalistrat"
const age = "141"
const mood = "borred"
const same = "My name"  ${ nam } + "jfds" + age + "jodf" + mood  */
/* 
let questList = `Гості:
1) Ivan
2) fsdi
3) jdso` */

let questList = "Гості: \n 1) \n Ivan2) \n fsdi3) jdso";
console.log(questList);

console.log(questList);
console.log(`Рдвдл ${2 + 2} `);

//Створити разом з учнями скрипт, який буде отримувати від користувача число (кількість хвилин) і буде виводити рядок в форматі часу як результат. Наприклад 80 виведе 01:20 450 - 07:30.

const totalMinutes = promt("Введіть кількість хвилин", "");
const numberHours = totalMinutes / 60;
const days = Math.floor(numberHours / 24);
const hour = Math.floor(numberHours % 24);
const modHours = String(hour).padStart(2, "0");
const minutes = totalMinutes % 60;
const modMinutes = String(minutes).padStart(2, "20");
const res = `${days} days ${modHours}:${modMinutes}`;
alert(res);

//Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .replace(), замінити першу літеру вашого імені на символ "@" та вивести результат в консоль.

const name = "Kostya";
console.log(name.replace("K", "@"));

//Створити змінну, яка містить рядок зі словом "JavaScript". Використовуючи метод .substring(), вивести підстроку, яка містить перші 4 символи слова "Java".
const d = "JavaScript";
console.log(d.substring(0, 3));

//Напиши скрипт який виведе рядок в форматі: “Гість x y поселяється в n номер g”, підставивши замість x, y, n, g значення змінних.

const x = "anton";
const y = "glodick";
const n = "hotel";
const g = 53;
const secntence = `Гість ${x} ${y}  поселяється в ${n} номер ${g}`;

//Створи програму яка буде обрізати повідомлення від лишніх пропусків з обох сторін.

const text1 = promt("Введіть повідомленя", "");
console.log(text1.trim());

//Створи змінну яка буде зберігати рядок “Ваш баланс поповнено на 1”. Додай в кінець рядка довільну кількість нулів. Довжину рядка дізнайся за допомогою властивості.

let text2 = "Ваш баланс поповнено на 1";
const newText = `${text2}.00`;
console.log(newText);
console.log(newText.length);

const blacklistedWord1 = "спам";
const blacklistedWord2 = "розпродаж";

const string1 = "Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!";
console.log(string1.indexOf(blacklistedWord1));

const string2 = "Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!";
console.log(string2.indexOf(blacklistedWor2));
const string3 = "Рекламна кампанія #jsIsAwesome";
console.log(string3.indexOf("Рекламна"));

let officialName = prompt('Яка "офіційна" назва JavaScript?', "");

if (officialName === "ECMAScript") {
  alert("Правильно!");
} else {
  alert("Ви не знаєте? ECMAScript!");
}

let userInput = prompt("Введіть число:", "");
let number = parseFloat(userInput);

if (number > 0) {
  alert("1");
} else if (number < 0) {
  alert("-1");
} else {
  alert("0");
}

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (randomNumber === 1) {
    return "The random number is 1!";
  } else if (randomNumber = 2) {
    return "The random number is 2!";
  } else if (randomNumber = 3) {
    return "The random number is 3!";
  } else if (randomNumber = 4) {
    return "The random number is 4!";
  } else {
    return "The random number is 5!";
  }
}

console.log(getRandomNumber());
