"use strict";

// function first () {
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second () {
//     console.log(2);
// }

// first();
// second();

// function learnJS (lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done () {
//     console.log("Я прошел этот урок");
// }

// learnJS("JavaScript", done);

// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red"
//     },
//     makeTest: function () {
//         console.log("Test");
//     },
//     makeUniqueTest() {
//         console.log("Unique test");
//     }

// };

// console.log(options.name);

// delete options.name;

// console.log(options);
// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]} `);
            // counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]} `);
//         counter++;
//     }
// }

// console.log(counter);

// for (let key in options) {
//     counter++;
// }

// console.log(counter);

// console.log(Object.keys(options).length);

// options.makeTest();
// options.makeUniqueTest();

// const {border, bg} = options.colors;

// console.log(border);

// const arr = [1, 2, 3, 6, 8];
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.pop();
// arr.push(10);

// console.log(arr);

// console.log(typeof(null));

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(item, index, array) {
//     console.log(`${index}: ${item} внутри массива ${array}`);
// }); // Перебор всех элеметов

// const str = prompt("Список товаров", "");
// const products = str.split(", ");
// products.sort();
// console.log(products);
// console.log(products.join("; "));

// const arr = [2, 13, 44, 3, 5, 7];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) { // Сравнение чисел
//     return a - b;
// }

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(10);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //Ссылка на объект obj

// copy.a = 10; // Модифицируем также объект obj

// console.log(copy);
// console.log(obj);

// function copy (mainObj) { // Поверхностная копия объектов
//     let objCopy = {};

//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers); // Создание копии объекта numbers

// newNumbers.a = 10;
// newNumbers.c.x = 10; // Поменялось в обоих местах

// console.log(numbers);
// console.log(newNumbers);

// const add = {
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(numbers, add)); // Поверхностная копия

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ["a", "b", "c"];
// // const newArray = oldArray; // Ссылка на oldArray
// const newArray = oldArray.slice(); // Копирование массива (поыерхностное)

// newArray[1] = "12121212";

// console.log(oldArray);
// console.log(newArray);

// const video = ["youtube", "vimeo", "rutube"],
//       blogs = ["wordpress", "livejournal", "blogger"],
//       internet = [...video, ...blogs, "vk", "facebook"]; // Разворачиваем данные с помощью ... (оператора разворота)

// console.log(internet);

// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num); // Разворачиваем и передаем массив num

// const array = ["a", "b"];

// const newArray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};