"use strict";
// class Animal {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// class Dog extends Animal {
//   breed: string;
//   constructor(name: string, breed: string) {
//     super(name);
//     this.breed = breed;
//   }
// }
// class Cat extends Animal {
//   color: string;
//   constructor(name: string, color: string) {
//     super(name);
//     this.color = color;
//   }
// }
// let myDog = new Dog("Buddy", "Golden Retriever");
// let myCat = new Cat("Whiskers", "Gray");
// console.log(myDog instanceof Dog); // true
// console.log(myDog instanceof Animal); // true
// console.log(myCat instanceof Cat); // true
// console.log(myCat instanceof Animal); // true
// console.log(myDog instanceof Cat); // false
/* */
function isNumber(value) {
    return typeof value === "number";
}
// Використання Type Predicate у функції
function multiplyIfNumber(value, multiplier) {
    if (isNumber(value)) {
        return value * multiplier;
    }
    return "Not a number";
}
console.log(multiplyIfNumber(5, 2)); // Виведе: 10
console.log(multiplyIfNumber("hello", 2)); // Виведе: Not a number
