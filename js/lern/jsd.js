/* Порахувати загальну кількість товарів в кошику */
const carts = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalAmountCarts = carts.reduce(
  (total, cart) => total + cart.quantity,
  0
);

console.log(totalAmountCarts);
