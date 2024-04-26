const showMessage = () => {
  alert("Hello World!");
};

const helloButton = document.getElementById("helloButton");
helloButton.addEventListener("click", showMessage);

const randomNumber = Math.floor(Math.random() * 100) + 1;

const checkGuess = () => {
  const userGuess = parseInt(document.getElementById("guessField").value);
  const guessResult = document.getElementById("guessResult");

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    guessResult.textContent = "Будь ласка, введіть число від 1 до 100.";
  } else if (userGuess === randomNumber) {
    guessResult.textContent = "Вітаємо! Ви вгадали!";
  } else {
    guessResult.textContent = `Неправильно. Спробуйте ще раз. Правильне число: ${randomNumber}`;
  }
};

let clickCounter = 0;
const clickCountElement = document.getElementById("clickCount");

document.addEventListener("click", () => {
  clickCounter++;
  clickCountElement.textContent = clickCounter;
});

const applyCallbackToEachElement = (arr, callback) => {
  return arr.map(callback);
};

const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num * num;

const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);

const calculateDiscountedPrice = (price, discount, callback) => {
  const discountedPrice = price * (1 - discount / 100);
  callback(discountedPrice);
};

const showDiscountedPrice = (discountedPrice) => {
  console.log(`Discounted price: ${discountedPrice}`);
};

calculateDiscountedPrice(100, 10, showDiscountedPrice);
