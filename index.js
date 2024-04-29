

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

// --------------------------------------------- objects 

// const person = {
//     firstName: "Farhan",
//     lastName: "Israk",
//     age: 28,
//     isEmployed: true,
//     sayHello: () => console.log("Hello!")
// }

// console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.isEmployed);
// person.sayHello();

// --------------------------------------------- this keyword
 // this keyword doesn't work with arrow function
// const person = {
//     firstName: "Farhan",
//     lastName: "Israk",
//     age: 28,
//     isEmployed: true,
//     sayHello: function() { console.log(`Hey! I'm ${this.firstName}`);}
// }

// person.sayHello();

// --------------------------------------------- constructor

// class Car {
//     constructor(make, model, year, color) {
//         this.make = make,
//         this.model = model,
//         this.year = year,
//         this.color = color;
//     }
// }

// const car1 = new Car("Ford", "Mustang", 2024, "red");
// const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");

// console.log(car1);
// console.log(car2);
// console.log(car1.make);
// console.log(car2.make);
// console.log(car2.make);


// --------------------------------------------- class

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct() {
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: ${this.price.toFixed(2)}`);
//     }

//     calculateTotal(salesTax) {
//         return this.price + (this.price * salesTax);
//     }
// }

// const salesTax = -.05;

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 19.99);
// const product3 = new Product("Underwear", 100.00012213);

// product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();

// const total = product1.calculateTotal(salesTax);
// console.log(`Total: ${total.toFixed(2)}`);

// --------------------------------------------- static

// class MathUtil{
//     static PI = 3.14159;
//     static getDiameter(radius) {
//         return radius * 2;
//     }
//     static getCircumference(radius) {
//         return 2* this.PI * radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(2));
// console.log(MathUtil.getCircumference(2));

// --------------------------------------------- super

// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     move(speed) {
//         console.log(`The ${this.name} moves at a speed of ${speed}mph`);
//     }
//  }

//  class Rabbit extends Animal {
//     constructor(name, age, runSpeed) {
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
    
//     run() {
//         console.log(`This ${this.name} can run`);
//         super.move(this.runSpeed);
//     }
//  }

//  class Fish extends Animal {
//     constructor(name, age, swimSpeed) {
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }

//     swim() {
//         console.log(`This ${this.name} can swim`);
//         super.move(this.runSpeed);
//     }
//  }

//  class Hawk extends Animal {
//     constructor(name, age, flySpeed) {
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }

//     fly() {
//         console.log(`This ${this.name} can fly`);
//         super.move(this.runSpeed);
//     }
//  }

//  const rabbit = new Rabbit("Bunny",1, 25);
//  const fish = new Fish("Nemo",2, 12);
//  const hawk = new Hawk("Hawk",3, 50);

//  console.log(rabbit.name);
//  console.log(rabbit.age);
//  console.log(rabbit.runSpeed);
//  console.log(fish.swimSpeed);
//  console.log(rabbit.run());

// --------------------------------------------- getter setter
//  class Rectangle{

//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     /**
//       * @param {number} newWidth
//       */
//     set width(newWidth){
//         if (newWidth > 0) {
//             this._width = newWidth;
//         }
//         else {
//             console.log("Width must be a positive number");
//         }
//     }

//     /**
//       * @param {number} newHeight
//       */
//     set height(newHeight){
//         if (newHeight > 0) {
//             this._height = newHeight; // underscore means private
//         }
//         else {
//             console.log("Height must be a positive number");
//         }
//     }

//     get width(){
//         return this._width;
//     }

//     get height(){
//         return this._height;
//     }

//     get area(){
//         return this._height * this._width;
//     }
//  }

//  const rectangle = new Rectangle(3, 4);
//  rectangle.height = 5;
//  rectangle.width = 6;

//  console.log(rectangle.height);
//  console.log(rectangle.width);
//  console.log(rectangle.area);

// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     set firstName(newFirstName){
//         if (typeof newFirstName === 'string' && newFirstName.length > 0) {
//             this._firstName = newFirstName;
//         } else {
//             console.error("First name must be a non-empty string");
//         }
//     }

//     set lastName(newLastName){
//         if (typeof newLastName === 'string' && newLastName.length > 0) {
//             this._lastName = newLastName;
//         } else {
//             console.error("Last name must be a non-empty string");
//         }
//     }

//     set age(newAge){
//         if (typeof newAge === 'number' && newAge >= 0) {
//             this._age = newAge;
//         } else {
//             console.error("Age must be non-negative number");
//         }
//     }

//     get firstName(){
//         return this._firstName;
//     }

//     get lastName(){
//         return this._lastName;
//     }

//     get age(){
//         return this._age;
//     }

//     get fullName(){
//         return this._firstName + " " + this._lastName;
//     }
// }

// const person = new Person("Farhan", "Israk", 29);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.fullName);

// --------------------------------------------- destructing(extract values from array or object thn
// assign them in a variable in a convenient way)

// swap the value of two variables

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// swap 2 elements om an array

// const colors = ['red', 'green', 'blue', 'yellow', 'white'];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

// extract value from object & destructure in function params

// function displayPerson({firstName, lastName, age, job="unemployed"}) {
//     console.log(`name: ${firstName} ${lastName}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }

// const person1 = {
//     firstName: "TestFirstName1",
//     lastName: "TestLastName1",
//     age: 30,
//     job: "Test1"
// }

// const person2 = {
//     firstName: "TestFirstName2",
//     lastName: "TestLastName2",
//     age: 20,
// }

// const {firstName, lastName, age, job="unemployed"} = person1;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// displayPerson(person2);

// --------------------------------------------- nested object

// const person = {
//     fullName: "Sponge Bob",
//     age: 30,
//     isStudent: true,
//     hobbies: ["Karate", "fishing"],
//     address: {
//         country: "Bangladesh",
//         city: "Dhaka",
//         location: "Old Dhaka"
//     }
// }

// console.log(person);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies);
// console.log(person.address);
// console.log(person.address.country);
// console.log(person.address.city);
// console.log(person.address.location);

// class Address {
//     constructor(street,city,country) {
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// class Person {
//     constructor(name, age, ...address) {
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// const person1 = new Person("Hello", 30, "Old Dhaka", "Dhaka", "Bangladesh");
// const person3 = new Person("World", 20, "Old Dhaka - 1", "Dhaka North", "Bangladesh");
// const person2 = new Person("Hi", 10, "Old Dhaka - 2", "Dhaka South", "Bangladesh");

// console.log(person1.address.street);
// console.log(person3.address.street);
// console.log(person2.address.street);

// --------------------------------------------- array of object

// const fruits = [
//     {name: "apple", color:"red", calories: 95},
//     {name: "orange", color:"orange", calories: 45},
//     {name: "banana", color:"yellow", calories: 105},
// ]

// console.log(fruits[0].name);

// fruits.push({name: "grapes", color:"purple", calories: 50});
// console.log(fruits);

// fruits.pop()

// fruits.splice(1,2);

// console.log(fruits);

// fruits.forEach(fruit => console.log(fruit.name));

// const fruitNames = fruits.map(fruit => fruit.name);

// console.log(fruitNames);

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

// console.log(yellowFruits);
// console.log(lowCalFruits);
// console.log(highCalFruits);


// const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

// console.log(maxFruit);

// --------------------------------------------- sort

// let numbers = [1, 10, 2, 3, 4, 5, 9, 7, 8, 6];

// numbers.sort();

// console.log(numbers);

// numbers.sort((a,b) => a-b);

// console.log(numbers);

// numbers.sort((a,b) => b-a);
// console.log(numbers);
// const people = [
//     {name: "test1", age: 30, gpa: 3.0},
//     {name: "test2", age: 20, gpa: 3.5},
//     {name: "test3", age: 70, gpa: 3.2},
//     {name: "test4", age: 10, gpa: 3.8},
// ]

// people.sort((a, b) => a.gpa - b.gpa);
// console.log(people);

// people.sort((a, b) => a.name.localeCompare(a.name));

// console.log(people);

// --------------------------------------------- date

// Date(year, m, d, h, min, s, ms)
// const date = new Date("2024-01-02T12:00:00Z");
// const date = new Date(1714417641000);
// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();

// console.log(year);
// console.log(month);

// date.setFullYear(2020);
// date.setMonth(2);
// date.setDate(1);
// date.setHours(3);
// date.setSeconds(4);

// console.log(date);

// const date1 = new Date("2023-12-31");
// const date2 = new Date("2023-12-30");
// if (date2 > date1) {
//     console.log("Happy New Year!");
// } else {
//     console.log("Wait!");
// }

// --------------------------------------------- closure

// function outer() {
//     let message = "Hello"; // helps to make variable private
//     function inner() {
//     console.log(message);
//     }
//     inner();
// }

// outer();

// function createCounter() {

//     let count = 0;

//     function increment() {        
//         count++;
//         console.log(`Count increased to ${count}`);
//     }

//     function getCount() {
//         return count;
//     }

//     return {increment, getCount}; // returning object
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`Current count is ${counter.getCount()}`);

// function createGame() {
//     let score = 0;

//     function increaseScore(points) {
//         score += points;
//         console.log(`+${points}pts`);
//     }

//     function decreaseScore(points) {
//         score-= points;
//         console.log(`-${points}pts`);
//     }

//     function getScore() {
//         return score;
//     }

//     return {increaseScore, decreaseScore, getScore};
// }

// const game = createGame();

// game.increaseScore(5);
// game.increaseScore(10);
// game.decreaseScore(3);
// game.decreaseScore(2);

// console.log(`The final score is ${game.getScore()}`);