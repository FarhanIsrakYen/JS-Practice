

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

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move(speed) {
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
 }

 class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
    
    run() {
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
 }

 class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        console.log(`This ${this.name} can swim`);
        super.move(this.runSpeed);
    }
 }

 class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly() {
        console.log(`This ${this.name} can fly`);
        super.move(this.runSpeed);
    }
 }

 const rabbit = new Rabbit("Bunny",1, 25);
 const fish = new Fish("Nemo",2, 12);
 const hawk = new Hawk("Hawk",3, 50);

 console.log(rabbit.name);
 console.log(rabbit.age);
 console.log(rabbit.runSpeed);
 console.log(fish.swimSpeed);
 console.log(rabbit.run());