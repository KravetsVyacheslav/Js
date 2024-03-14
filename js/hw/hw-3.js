let temperatureCelsius = 9;

let temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

console.log(`Температура у Цельсіях: ${temperatureCelsius} °C`);

console.log(`Температура у Фаренгейтах: ${temperatureFahrenheit} °F`);


let daysInMonth = 30;

const hoursInDay = 24;

const minutesInHour = 60;

let totalHoursInMonth = daysInMonth * hoursInDay;

let totalMinutesInMonth = totalHoursInMonth * minutesInHour;

console.log(`Кількість годин у місяці: ${totalHoursInMonth} год.`);
console.log(`Кількість хвилин у місяці: ${totalMinutesInMonth} хв.`);


let health = 100;
let energy = 50;

health -= 20;
energy -= 10;


console.log(`Рівень здоров'я гравця: ${health}`);
console.log(`Рівень енергії гравця: ${energy}`);


let purchaseAmount = 200;

const discountPercentage = 15;
const discountMultiplier = 1 - (discountPercentage / 100);
let discountedAmount = purchaseAmount * discountMultiplier;

// Виводимо результат у консоль
console.log(`Сума покупки: $${purchaseAmount}`);
console.log(`Знижка ${discountPercentage}% застосована.`);
console.log(`Сума зі знижкою: $${discountedAmount}`);


let firstNumber = 8.75;

let secondNumber = Math.floor(firstNumber);

console.log(`Початкове число: ${firstNumber}`);
console.log(`Округлене число до меншого: ${secondNumber}`);


let firstString = "3,3";

let secondString = parseFloat(firstString);

console.log(`Початковий рядок: "${firstString}"`);
console.log(`Перетворене число: ${secondString}`);


let notIntegerString = "42";

let integerValue = parseInt(integerString);

console.log(`Початковий рядок: "${integerString}"`);
console.log(`Перетворене ціле число: ${integerValue}`);


let number = 25;

let squareRoot = Math.sqrt(number);

console.log(`Початкове число: ${number}`);
console.log(`Квадратний корінь: ${squareRoot}`);


let integerNumber = 42;

let stringNumber = "25,8";

let parsedNumber = parseInt(stringNumber);

console.log(`Рядок з числом: "${stringNumber}"`);
console.log(`Перетворене ціле число: ${parsedNumber}`);

let stringFromInteger = integerNumber.toString();

console.log(`Цілочисельне значення: ${integerNumber}`);
console.log(`Перетворений рядок: "${stringFromInteger}"`);


