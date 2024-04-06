// 1
const numbering = ["first", "second", "third", "cheverty"];
let result = "";
for (let i = 0; i < fruit.length; i++) {
  if (i === fruit.length - 1) {
    result += numbering[i];
  } else {
    result += numbering[i] + ", ";
  }
}
console.log(result);

const number = ["one", "two", "three", "four"];
const result_02V = number.join(", ");
console.log(result_02V);
// 2;3;4;5
let cards = ["Card 1", "Card 2", "Card 3", "Card 4"];

cards.splice(1, 1);
console.log(cards);

cards.splice(2, 0, "Card add");
console.log(cards);

cards.splice(0, 1, "Card_v2");
console.log(cards);

let indexToRemove = cards.indexOf("Card 3");
if (indexToRemove !== -1) {
  cards.splice(indexToRemove, 1);
  console.log(cards);
}

cards.splice(cards.length, 0, "Card add");
console.log(cards);

cards.splice(0, 1, "Card_v2.0204");
console.log(cards);
