const name = "shivam";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "rajpura"
};
console.log(user);

//object destructuring
const product = {
  label: "notebook",
  price: 3,
  stock: 201,
  salePrice: undefined
};

const { label: labal, stock, rating: ratang = 5 } = product;
console.log(labal, stock, ratang);

const transaction = (type, { label, stock }) => {
  // const { label } = myProduct;
  console.log(label, stock);
};
transaction("order", product);
