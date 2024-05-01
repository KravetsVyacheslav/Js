const bankAccount = {
  ownerName: "Вячеслав",
  accountNumber: "123456789",
  balance: 0,

  deposit(amount) {
    this.balance += amount;
    this.displayBalance();
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.displayBalance();
    } else {
      alert("Недостатньо коштів!");
    }
  },

  displayBalance() {
    const balanceDisplay = document.getElementById("balanceDisplay");
    balanceDisplay.textContent = `Balance: $${this.balance}`;
  },
};

function deposit() {
  const amount = parseFloat(prompt("Введіть суму депозиту:"));
  if (!isNaN(amount) && amount > 0) {
    bankAccount.deposit(amount);
  } else {
    alert("Недійсна сума!");
  }
}

function withdraw() {
  const amount = parseFloat(prompt("Enter withdrawal amount:"));
  if (!isNaN(amount) && amount > 0) {
    bankAccount.withdraw(amount);
  } else {
    alert("Недійсна сума!");
  }
}

// Початкове відображення балансу
bankAccount.displayBalance();

const weather = {
  temperature: 0,

  isBelowZero() {
    return this.temperature < 0;
  },
};

function checkTemperature() {
  weather.temperature = parseFloat(
    document.getElementById("temperatureInput").value
  );
  const message = weather.isBelowZero()
    ? "Температура нижче 0°C"
    : "Температура 0°C або вище";
  alert(message);
}

const user = {
  name: "",
  email: "",
  password: "",

  login() {
    const enteredEmail = document.getElementById("emailInput").value;
    const enteredPassword = document.getElementById("passwordInput").value;

    if (enteredEmail === this.email && enteredPassword === this.password) {
      alert("Вхід успішний!");
    } else {
      alert("Невірна адреса електронної пошти або пароль.");
    }
  },
};

function login() {
  user.email = document.getElementById("emailInput").value;
  user.password = document.getElementById("passwordInput").value;
  user.login();
}

const movie = {
  title: "Початок",
  director: "Крістофер Нолан",
  year: 2010,
  rating: 9.3,

  isHighlyRated() {
    return this.rating > 8;
  },
};

const titleDisplay = document.getElementById("titleDisplay");
if (movie.isHighlyRated()) {
  titleDisplay.style.color = "green";
}
