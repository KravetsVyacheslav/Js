"use strict";

const user = {
  mood: "hap",
  hobby: "football",
  premium: "premium",
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);
for (let key of keys) {
  console.log(`${key}: ${user[key]}`);
}

const countProps = (obj) => {
  const keys = Object.keys(obj);
  return keys.length;
};

const userPropsCount = countProps(user);
console.log(userPropsCount);

const findBestEmployee = (employees) => {
  let maxTasks = 0;
  let bestEmployee = "";

  for (let employee in employees) {
    if (employees[employee] > maxTasks) {
      maxTasks = employees[employee];
      bestEmployee = employee;
    }
  }

  return bestEmployee;
};

const employees = {
  John: 10,
  Jane: 8,
  Bob: 12,
};
const mostProductiveEmployee = findBestEmployee(employees);
console.log(mostProductiveEmployee);

const countTotalSalary = (employees) => {
  let totalSalary = 0;

  for (let employee in employees) {
    totalSalary += employees[employee];
  }

  return totalSalary;
};

const salaries = {
  John: 2000,
  Jane: 1800,
  Bob: 2500,
};
const totalSalaries = countTotalSalary(salaries);
console.log(totalSalaries);

const getAllPropValues = (arr, prop) => {
  const values = [];

  for (let obj of arr) {
    if (obj.hasOwnProperty(prop)) {
      values.push(obj[prop]);
    }
  }

  return values;
};

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 500 },
];
const productPrices = getAllPropValues(products, "price");
console.log(productPrices);

const calculateTotalPrice = (allProducts, productName) => {
  let totalPrice = 0;

  for (let product of allProducts) {
    if (product.name === productName) {
      totalPrice += product.price;
    }
  }

  return totalPrice;
};

const totalPrice = calculateTotalPrice(products, "Laptop");
console.log(totalPrice);
