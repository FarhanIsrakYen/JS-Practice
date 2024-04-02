

// let age = 25;
// let name ="Farhan";
// let email ="a@b.com";

// console.log(`Age of ${name} is ${age} and email=${email}`);

// document.getElementById("submit").onclick = function() {
//     name = document.getElementById("name").value;
//     document.getElementById("h1name").textContent = `Hello ${name}`;
//     document.getElementById("name").textContent = `Hello ${name}`;
// }
// let count = 0;

// document.getElementById("increase").onclick = function() {
//     document.getElementById("countlabel").textContent = `${++count}`;
// }
// document.getElementById("clear").onclick = function() {
//     document.getElementById("countlabel").textContent = `0`;
//     count = 0;
// }
// document.getElementById("decrease").onclick = function() {
//     document.getElementById("countlabel").textContent = `${--count}`;
// }

// let userName = "Hello World";

// let first = userName.slice(0,5);
// let last = userName.slice(6);

// var check = function(a,b) {
//     return a+b;
// }

// console.log(check(1,2));

// ------------------------------------ array
// let fruits = ['apple', 'banana', 'orange'];
// console.log(fruits[1]);
// fruits.pop();
// console.log(fruits);
// fruits.push('mango'); // adds element at last
// console.log(fruits);
// fruits.unshift('pears'); // adds element at first
// console.log(fruits);
// fruits.shift()
// console.log(fruits);

// fruits.forEach(fruit => {
//     console.log(fruit);
// });

//------------------------------------------------- spread operator
// let myName = "Hello World";
// let spMyName = [...myName];
// let spMyName2 = [...myName].join('-');
// console.log(spMyName);
// console.log(spMyName2);

// let fruits = ['mango', 'apple', 'banana'];
// let vegetables = ['carrot', 'tomato', 'potato'];
// let newFruits = [...fruits, ...vegetables, 'eggs', 'milk']

// console.log(newFruits);

// ---------------------------------------------------- rest parameters
// function openFridge(...foods) {
//     console.log(foods); // array
//     console.log(...foods); // elements
// }

// const food1 = 'pizza';
// const food2 = 'burger';
// const food3 = 'hotdog';
// const food4 = 'sushi';

// openFridge(food1,food2,food3,food4);

// function sum(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }
//     return result;
// }

// function getAverage(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }
//     return result/numbers.length;
// }

// console.log(sum(1,2,3));
// console.log(getAverage(1,2,3));

// function combineStrings(...strings) {
//     return strings.join(' ');
// }

// const fullName = combineStrings("Mr.", "Farhan", "Israk");

// console.log(fullName);

// ---------------------------------------- callback

// hello(world);

// function hello(callback) {
//     setTimeout(() => {
//         console.log("Hello");
//         callback();
//     }, 3000);
// }

// function world() {
//     console.log("World");
// }

// calculate(show, 10, 5);

// function calculate(callback, x, y) {
//     let sum = x + y;
//     let subtraction = x - y;
//     let multiply = x * y;
//     let division = x / y;

//     callback(sum, subtraction, multiply, division);
// }

// function show(...values) {
//     console.log(values.join(', '));
// }


// ------------------------------------------------- foreach
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(double);
// numbers.forEach(display);

// function double(element, index, array) {
//     array[index] = element * 2;
// }

// function display(element) {
//     console.log(element);
// }

// let fruits = ["apple", "banana", "orange"];
// fruits.forEach(capitalize);
// fruits.forEach(display);

// function upperCase(element, index, array) {
//     array[index] = element.toUpperCase();
// }

// function capitalize(element, index, array) {
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// -------------------------------------------------  map()
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// console.log(squares);

// const fruits = ["apple", "banana", "orange"];
// const capFruits = fruits.map(capitalize);
// console.log(capFruits);


// function square(element) {
//     return Math.pow(element, 2);
// }

// function capitalize(element) {
//     return element.charAt(0).toUpperCase() + element.slice(1);
// }


// ----------------------------------------------------- filter()

// let numbers = [1,2,3,4,5,6,7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(evenNums);
// console.log(oddNums);

// function isEven(element) {
//     return element % 2 === 0;
// }

// function isOdd(element) {
//     return element % 2 !== 0;
// }


// -------------------------------------------- reduce()

// const prices = [1,2,3,4,5];
// const total = prices.reduce(sum);

// console.log(total.toFixed(2));
// console.log(prices.reduce(getMax));
// console.log(prices.reduce(getMin));


// function sum(prev, next) {
//     return prev + next;
// }

// function getMax(prev, next) {
//     return Math.max(prev, next);
// }

// function getMin(prev, next) {
//     return Math.min(prev, next);
// }


// --------------------------------------------- arrow functions

// const hello = (name,age) => {console.log(`Hello ${name}`)
//                         console.log(`You're ${age} years old`)  };

// hello("Bro",25);

// setTimeout(() => {
//     console.log("Hello");
// }, 3000);

// const numbers = [1,2,3,4,5];

// const squares = numbers.map((element) => Math.pow(element, 2));

// console.log(squares);

// const cubes = numbers.map((element) => Math.pow(element, 3));

// console.log(cubes);

// const evenNums = numbers.filter((element) => element % 2 === 0);

// console.log(evenNums);

// const oddNums = numbers.filter((element) => element % 2 !== 0);

// console.log(oddNums);

// const sum = numbers.reduce((prev, next) => prev + next);

// console.log(sum);

// const maxNum = numbers.reduce((prev, next) => Math.max(prev, next));
// const minNum = numbers.reduce((prev, next) => Math.min(prev, next));

// console.log(maxNum);
// console.log(minNum);

