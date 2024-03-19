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
/* Перший приклад Type Pridacates: */
// function isNumber(value: any): value is number {
//   return typeof value === "number";
// }
// // Використання Type Predicate у функції
// function multiplyIfNumber(value: any, multiplier: number): any {
//   if (isNumber(value)) {
//     return value * multiplier;
//   }
//   return "Not a number";
// }
// console.log(multiplyIfNumber(5, 2)); // Виведе: 10
// console.log(multiplyIfNumber("hello", 2)); // Виведе: Not a number
/* Другий: */
// // Type Predicate для перевірки, чи є об'єкт масивом
// function isArray(value: any): value is any[] {
//   return Array.isArray(value);
// }
// // Використання Type Predicate у функції
// function getFirstElement(arrayOrNumber: any[] | number): any {
//   if (isArray(arrayOrNumber)) {
//       return arrayOrNumber[0];
//   }
//   return arrayOrNumber;
// }
// console.log(getFirstElement([1, 2, 3])); // Виведе: 1
// console.log(getFirstElement(5)); // Виведе: 5
/* Третій:  */
// // Тип даних для об'єкта з визначеними властивостями
// interface Person {
//   name: string;
//   age: number;
// }
// // Type Predicate для перевірки, чи є об'єкт типу Person
// function isPerson(value: any): value is Person {
//   return typeof value === 'object' && 'name' in value && 'age' in value;
// }
// // Використання Type Predicate у функції
// function greetPerson(personOrString: Person | string): string {
//   if (isPerson(personOrString)) {
//       return `Hello, ${personOrString.name}!`;
//   }
//   return `Hello, ${personOrString}!`;
// }
// console.log(greetPerson({ name: 'John', age: 30 })); // Виведе: Hello, John!
// console.log(greetPerson('World')); // Виведе: Hello, World!
/* Четвертий: */
// // Type Predicate для перевірки, чи є об'єкт строкою
// function isString(value: any): value is string {
//   return typeof value === 'string';
// }
// // Використання Type Predicate у функції
// function reverseStringOrNumber(value: string | number): string | number {
//   if (isString(value)) {
//       return value.split('').reverse().join('');
//   }
//   if (typeof value === 'number') {
//       return Number(value.toString().split('').reverse().join(''));
//   }
//   return value;
// }
// console.log(reverseStringOrNumber('hello')); // Виведе: olleh
// console.log(reverseStringOrNumber(12345)); // Виведе: 54321
// console.log(reverseStringOrNumber(true)); // Виведе: true
