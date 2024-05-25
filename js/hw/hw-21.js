"use strict";

const musicLibrary = {
  count: 2,
  artists: [
    {
      name: "The Beatles",
      albums: [
        {
          title: "Sgt. Pepper's Lonely Hearts Club Band",
          year: 1967,
          tracks: [
            { title: "With a Little Help from My Friends", duration: "2:44" },
            { title: "Lucy in the Sky with Diamonds", duration: "3:28" },
            { title: "A Day in the Life", duration: "5:33" },
          ],
        },
        {
          title: "Abbey Road",
          year: 1969,
          tracks: [
            { title: "Come Together", duration: "4:19" },
            { title: "Something", duration: "3:01" },
            { title: "Here Comes the Sun", duration: "3:06" },
          ],
        },
      ],
    },
    {
      name: "Pink Floyd",
      albums: [
        {
          title: "The Wall",
          year: 1979,
          tracks: [
            { title: "Another Brick in the Wall, Part 2", duration: "3:59" },
            { title: "Comfortably Numb", duration: "6:23" },
            { title: "Hey You", duration: "4:40" },
          ],
        },
        {
          title: "Dark Side of the Moon",
          year: 1973,
          tracks: [
            { title: "Speak to Me/Breathe", duration: "3:58" },
            { title: "Time", duration: "7:06" },
            { title: "Money", duration: "6:22" },
          ],
        },
      ],
    },
  ],
};

const {
  artists,
  artists: [iteam1, iteam2],
} = musicLibrary;
const {
  name3,
  albums1,
  albums: [miniitem1, miniitem2],
} = iteam1;

const {
  bigtitle1,
  bigyear1,
  tracks1,
  tracks: [miniminiiteam1, miniminiiteam2, miniminiiteam3],
} = miniitem1;
const { title5, duration1 } = miniminiiteam1;
const { title6, duration2 } = miniminiiteam2;
const { title7, duration3 } = miniminiiteam3;

const {
  bigtitle2,
  bigyear2,
  tracks2,
  tracks: [miniminiiteam4, miniminiiteam5, miniminiiteam6],
} = miniitem2;
const { title9, duration4 } = miniminiiteam4;
const { title10, duration5 } = miniminiiteam5;
const { title11, duration6 } = miniminiiteam6;

const {
  name4,
  albums2,
  albums: [miniitem3, miniitem4],
} = iteam1;

const {
  bigtitle3,
  bigyear3,
  tracks3,
  tracks: [miniminiiteam7, miniminiiteam8, miniminiiteam9],
} = miniitem1;
const { title12, duration7 } = miniminiiteam1;
const { title13, duration8 } = miniminiiteam2;
const { title14, duration9 } = miniminiiteam3;

const {
  bigtitle4,
  bigyear4,
  tracks4,
  tracks: [miniminiiteam10, miniminiiteam11, miniminiiteam12],
} = miniitem2;
const { title15, duration10 } = miniminiiteam4;
const { title16, duration11 } = miniminiiteam5;
const { title17, duration12 } = miniminiiteam6;

const user = {
  mood: "hap",
  hobby: "football",
  premium: "premium",
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const userKeys = Object.keys(user);
for (const key of userKeys) {
  console.log(`${key}: ${user[key]}`);
}

const countProps = (obj) => {
  return Object.keys(obj).length;
};

const userPropsCount = countProps(user);
console.log(userPropsCount);

const findBestEmployee = (employees) => {
  let maxTasks = 0;
  let bestEmployee = "";

  for (const [employee, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
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

  for (const salary of Object.values(employees)) {
    totalSalary += salary;
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

  for (const obj of arr) {
    if (prop in obj) {
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

  for (const { name, price } of allProducts) {
    if (name === productName) {
      totalPrice += price;
    }
  }

  return totalPrice;
};

const totalPrice = calculateTotalPrice(products, "Laptop");
console.log(totalPrice);
