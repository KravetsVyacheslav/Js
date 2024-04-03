"use strict";

let numArray = [2, 4, 6];
numArray[1] = 10;
console.log(numArray);

let strArray = ["string 1", "string 2", "string 3"];
strArray.push("string 4");
console.log(strArray);

let sumArray = [1, 3, 5, 7, 9];
let sum = 0;
for (let i = 0; i < sumArray.length; i++) {
  sum += sumArray[i];
}
console.log(sum);

let fiveNumArray = [1, 2, 3, 4, 5];
for (let i = 0; i < fiveNumArray.length; i++) {
  console.log(fiveNumArray[i]);
}

let fiveStrArray = ["hi", "helow ", "adios ", "bue", "wow"];
for (let i = 0; i < fiveStrArray.length; i++) {
  if (fiveStrArray[i].length > 5) {
    console.log(fiveStrArray[i]);
  }
}

let NumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maxValue = NumArray[0];
for (let i = 1; i < NumArray.length; i++) {
  if (NumArray[i] > maxValue) {
    maxValue = NumArray[i];
  }
}
console.log(maxValue);

let tenNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < tenNumArray.length; i++) {
  if (tenNumArray[i] % 2 === 0) {
    console.log(tenNumArray[i]);
  }
}