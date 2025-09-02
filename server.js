// console.log("This is an arrays");

const fruits = ["Apple", "Banana", "Coconut", "Orange"];
// fruits.push("Pine Apple")

// fruits.unshift("Pine Apple")

// add new item to specific location using splice

// fruits.splice(2, 0, "Grape")

// remove last item using pop method

// fruits.pop()

// remove begin item using shift method
// fruits.shift()

// Problem: Want to remove 3 items
// fruits.splice(0, 3)
// console.log('After removed', fruits)
// console.log("Total element", fruits.length);

// using icludes to find the specific item

// console.log(fruits.includes('Orange'))

// Object
// Person: Name, Gender, Age, DateOfBirth
console.log("Object");
const person = {
  name: "Seyha",
  gender: "M",
  age: "18",
  dataOfBirth: "2000-10-20",
};

const laptop = {
  ram: "16 G",
  storage: "500 GB",
  keyboardColor: "Black",
  color: "White",
};

console.log("Name: ", person.name);
console.log("Gender: ", person.gender);
console.log("Age: ", person.age);
console.log("DateOfBirth", person.dataOfBirth);

console.log("Person", person);

// Define object that surround your self

// Product: name, sell price, discount, quantity, color, size,
const product = {
  name: "Mi jeat Noodle",
  price: "700 riels",
  color: "yellow",
  quantity: 100,
};

const staff = {
  name: "Staff1",
  salary: "600",
  position: "Full stack",
};

console.log(staff);

const staffs = [
  {
    name: "StaffA",
    salary: "600",
  },
  {
    name: "staffB",
    salary: "500",
  },
  staff,
];

console.log(staffs);

function addNum(param1, param2) {
  return param1 + param2;
}

const operator = {
  number1: 10,
  number2: 20,

  add: function add() {
    return this.number1 + this.number2;
  },

  divide: function divide() {
    return this.number1 / this.number2;
  },

  multi: function multi() {
    return this.number1 * this.number2;
  },
};
console.log("Multi Operator", operator.add());

// JSON.stringify()
console.log("---------------");
const peoples = [
  { name: "A", gender: "M" },
  { name: "B", gender: "M" },
  { name: "C", gender: "F" },
  { name: "D", gender: "M" },
  { name: "E", gender: "F" },
  { name: "F", gender: "M" },
];

console.log(JSON.stringify(peoples));

const motos = [
  {
    model: "Honda",
  },
  {
    model: "Dreaam",
  },
  {
    model: "Scoopy",
  },
];
const moto = {
  model: "Hondal",
  color: "Black",
  wheel: 2,
};
const motoScopy = {
  model: "Scoopy",
  color: "White",
  wheel: 2,
};

// create function and arrow function

function fullName(firstName, lastName) {
  return lastName + " - " + firstName;
}

const fullNameV2 = (firstName, lastName) => {
  return lastName + " - " + firstName;
};

const fullNameV3 = (firstName, lastName) => lastName + " - " + firstName;

const nameV1 = fullName("Ratana", "San");
const nameV2 = fullNameV2("Ratana", "San");
const nameV3 = fullNameV3("Ratana", "San");

console.log("Name V1: ", nameV1);
console.log("Name V2: ", nameV2);
console.log("Name V3: ", nameV3);

function addV1(a, b) {
  return a + b;
}

const add = (a, b) => a + b;

const multiply = (a) => a * 5;

console.log(add(100, 200));
console.log(multiply());

const numbers = [1, 2, 3, 4, 5]; // * 2  [2,4,6,8,10]

//Old way
let doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

console.log("Result", doubled);

let result = numbers.map((item) => item * 2);
console.log("Result", result);

let ages = [18, 25, 30, 17, 15];

let newAges = ages.map((item) => item + 1);

let vote = newAges.filter((item) => item >= 18);

console.log("Ages:", newAges);
console.log("Vote age:", vote);

const products = [
  { id: 1, name: "Shoes", price: 5 },
  { id: 2, name: "Laptop", price: 1000 },
  { id: 1, name: "T-Shirt", price: 10 },
];

console.log("All Products", products);

// Shoes after 5% discount price = 4.75
// Laptop after 5% discount price = 950
// T-shirt after 5% discount price = 9.5

// Expect output after 5% discount
// Products List [
//   { id: 1, name: 'Shoes', price: 4.75 },
//   { id: 2, name: 'Laptop', price: 950 },
//   { id: 1, name: 'T-Shirt', price: 9.5 }
// ]

const calculateDiscount = (price) => price * 5 / 100

products.map((item) => item.price -= calculateDiscount(item.price) )
// products.map((item) => item.price -= (item.price * 5 / 100) )
console.log("Product after discount", products)