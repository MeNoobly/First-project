"use strict";
// alert("Я JavaScript!");  

// alert("BEBRA");

// let admin;
// let name1;
// name1 = "Джон";
// admin = name1;
// alert(admin);

// let ourPlanet;
// let planetEarth;
// let nowUser;

// let userName = prompt("Укажите своё имя");
// alert(`Здравствуйте, ${userName}`);

// let someString = "    i write   ";
// alert (someString);
// someString = Number(someString);
// alert (someString);

// "1"*
// -1
// true*
// 2
// 6
// 9px
// "$45"
// 2
// underfiend*
// Infinity
// "   -9   5"
// -14
// 1
// NaN
// NaN*

// let a = prompt("Введите первое число");
// let b = prompt("Введите второе число");
// alert (+a + +b);

// let officialName = "ECMAScript";

// let ask = prompt("Какое «официальное» название JavaScript?");

// if (ask == officialName)
// {
//     alert ("Верно!");
// }
// else
// {
//     alert ("Не знаете? ECMAScript!");
// }

// let value = prompt("Введите число ");

// if (value == "0")
// {
//     alert(0);
// }
// else if (value > "0")
// {
//     alert(1);
// }
// else
// {
//     alert(-1);
// }

// let a = prompt ("Введите первое число");
// let b = prompt ("Введите второе число");
// let result = (a + b < 4) ? "Мало" : "Много";
// alert(result);

// let message = (login == "Сотрудник") ? "Привет" : 
//     (login == "Директор") ? "Здравствуйте" : 
//     (login == "") ? "Нет логина" : 
//     "";

// age = prompt();
// if (age <= 14 && age >= 90)
// {
//     alert ("Не находится в диапозоне");
// }
// if (!(age >= 14 && age <= 90))
// {
//     alert ("Не находится в диапозоне");
// }

// let login = prompt("Введите логин");
// if (login == "Админ")
//     {
//         let password = prompt ("Введите пароль");
//         if (password == "Я главный")
//             {
//                 alert("Здравствуйте!");
//             }
//         else if (password == null || password == '')
//             {
//                 alert("Отменено");
//             }
//         else 
//         {
//             alert ("Неверный пароль");
//         }
//     }
// else if (login == null || login == '')
//     {
//         alert("Отменено");
//     }
// else
//     {
//         alert("Я вас не знаю");
//     }

// let firstName = null;
// let lastName;
// let count = 0;
// let bitches = null;
// alert (firstName || lastName || count || bitches);
// alert (firstName ?? lastName ?? count ?? bitches);

// let x = (0 && true) ?? false;
// alert (x);

// let x = 0;
// do 
// {
//     alert ("Firt do!");
//     x = 0
// }   while (x != 0);

// for (let i = 2; i < 11; i++)
// {
//     if (i % 2 == 0) alert (i);
// }

// let i = 0;
// while (i < 3)
// {
//     alert( `number ${i}!` );
//     i++;
// }

// let input = '';
// while (+input < 100)
// {
//     input = prompt("Введите число больше 100!");
//     if (input == '' || input == null) 
//     {
//         break;
//     }
//     else if (input > 100)
//     {
//         alert("Вы ввели число больше 100");
//         break;
//     }
//     else 
//     {
//         alert ("Вы ввели число меньше 100");
//     }
// }
// alert("Готово!");

// let num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);

// let count = 0;
// alert ("Введите интревал");
// let a = +prompt("От начала...");
// let b = +prompt("...и до конца.");

// if (a === null || b === null)
//     {
//     alert("Введены неправильные значения");
//     }
// if (b < a)
//     {
//     alert ("Введён неверный промежуток");
//     }
// nextValue:
// for (let i = a; (i <= b) && (a !== null) && (b !== null); i++)
// {
//     for (let j = 2; j < (i / 2 + 1); j++)
//     {
//         if (i % j == 0) continue nextValue;
//     }
//     alert (i);
// }

// let browser = prompt("Введите свой браузер");

// if (browser == "Edge")
// {
//     alert( "You've got the Edge!" );
// }
// if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") 
// {
//     alert( "Okay we support these browsers too" );
// }
// else
// {
//     alert( "We hope that this page looks ok!" );
// }

// const number = +prompt("Введите чило между 0 и 3");

// switch(number)
// {
//     case 0:
//         alert("Вы ввели число 0");
//         break;
//     case 1:
//         alert("Вы ввели число 1");
//         break;
//     case 2:
//     case 3:
//         alert("Вы ввели число 2, а может и 3");
//         break;
// }

// let check = 1;
// function nonCheck()
// {
//     check = 2;
// }
// alert(check);
// nonCheck();
// alert(check);

// function checkAge()
// {
//     return (age > 18) ? true : confirm("Родители разрешили?")
//     return (age > 18 || confirm("Родители разрешили?"))
// }

// function min(a, b)
// {
//     // if (a > b)
//     // {
//     //     return b
//     // }
//     // if(a > b)
//     // {
//     //     return a
//     // }
//     // else
//     // {
//     //     return 1
//     // }

//     // return (a > b) ? b : (a < b) ? a : 1

//     // if (a > b)
//     // {
//     //     return b
//     // }
//     // else
//     // {
//     //     return a
//     // }

//     // return (a > b) ? b : a
// }

// function pow (x, n)
// {
//     return (n > 1) ? x ** n : "Степень меньше 1 не поддерживается"
// }
// let x = +prompt("Введите число, которое хотите ввести в степень");
// let n = +prompt("Введите степень");
// alert(pow(x, n))

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились"),
//     () => alert("Вы оменили выполнение")
//   );

// function pow(x, n) {
//   let result = 1; 
  
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n <= 0){
//   alert(`Степень ${n} не поддерживается, 
//   введите целую степень, большую 0`);
// } else {
//   alert( pow(x, n) );
// }

// let user = {
//     name: "Nick",
//     age: "18",
//     "main job": "programist"
// }

// console.log(user.name);
// console.log(user.age);

// user.isAdmin = true;

// console.log(user.isAdmin);

// delete user.age;

// console.log(user.age);

//console.log(user["main job"]);

// function makeUser(name, age) {
//     return {
//         name,
//         age
//     }
// }

// let makeUser = (name, age) => {
//     return {
//     name,
//     age
//     }
// }

// let user = makeUser(prompt("Введите своё имя"), prompt("Введите свой возраст"));

// // alert(`Твоё имя: ${user.name},
// // Твой возраст: ${user.age}`);

// // console.log("someProperty" in user);

// for (let key in user) {
//     alert(key);

//     alert(user[key]);
// }

// let user = {};

// user.name = "John";
// user.surname = "Smith";

// user.name = "Pete";

// delete user.name;

// function isEmpty(obj) {
//     let flag = 0;

//     for (let key in obj) {
//         if (key != null) {
//             flag = 1;
//         }
//     }
    
//     if (flag == 0)
//     {
//         return true
//     } else {
//         return false
//     }

// }   

// let user = {
//     education: "Higher"
// };

// alert (isEmpty(user));

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0;

// for (let key in salaries) {
//     sum += +salaries[key];
// }

// alert(sum);

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof(obj[key]) == "number") obj[key] *= 2;
//     }
// }

// multiplyNumeric(menu);

// alert(menu.width);

// let user = { name: "Ваня" };
// let admin = user; 

// admin.name = "Никита";

// // alert (admin);
// // alert(user.name);
// alert(admin.name);

// let user = {};

// let permission1 = { canView: true };
// let permission2 = { sex: 'man' };

// Object.assign(user, permission1, permission2);

// // alert(user.sex);

// let clone = Object.assign({}, user);

// alert(clone.sex);

// let user = {
//     user: "Nick",

//     sayHi() {
//         alert("My name is my name");
//         alert(this.user);
//     }
// }

// user.sayHi()

// let calculator = {
//     read() {
//         this.firstValue = +prompt("Введите первое значение");
//         this.SecondValue = +prompt("Введите второе значение");
//     },

//     sum() {
//         return this.firstValue + this.SecondValue;
//     },

//     mul() {
//         return this.firstValue * this.SecondValue;
//     }
// }

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let ladder = {
//     step: 0,

//     up() {
//       this.step++;
//       return this;
//     },

//     down() {
//       this.step--;
//       return this;
//     },

//     showStep() {
//       alert( this.step );
//       return this;
//     }
// };

// ladder.up().showStep()

// let obj = {}

// function A() {
//     return obj;
// }

// function B() {
//     return obj;
// }

// let person1 = new A();
// let person2 = new B();

// alert(person1 == person2);

// function CreateCalculator() {
    
//     this.read = function() {
//         this.a = +prompt("Введите первое значение");
//         this.b = +prompt("Введите второе значение");
//     };

//     this.sum = function() {
//         return this.a + this.b;
//     };
    
//     this.mul = function() {
//         return this.a * this.b;
//     };
// }

// let calculator = new CreateCalculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Accumulator( startingValue ) {
//     this.value = startingValue;

//     this.read = function() {
//         let count = +prompt("Введите что нужно прибавить");
//         this.value += count;
//     };

// }  

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

// let user = {}; // пользователь без адреса

// alert( user?.address?.street ); // undefined (без ошибки)

// let id = Symbol("id");

// alert(id.description);

// let user = {
//     name: "Вася",
//     [id]: "slave"
// }

// let id = Symbol("Vasya");

// user.id = id;

// console.log(user.id);

// let user = {
//     name: "Jon",
//     age: 18,

//     // [Symbol.toPrimitive](hint) {
//     //     return hint == "string" ? this.name : this.age;
//     // }

//     toString() {
//         return this.name;
//     },

//     valueOf() {
//         return this.age;
//     },
// }

// alert (String(user));
// alert (user + 1234);

// let x = 12386886868;
// alert (x.toString(15));

// let x = 10;
// let y = 20;

// alert (+x.toString(19) + +y.toString(19));

// alert( 9999999999999999 );

// let a = +prompt("a?");
// let b = +prompt("b?");

// alert (+a.toFixed(10) + +b.toFixed(10));
//alert(a + b);

// alert(6.35.toFixed(1))


// function readNumber() {
//     let x = prompt("Введите число")
//     while (isFinite(x) != true) {
//         if (x == "" || x === null) {
//             alert("Выход из программы");
//             break;
//         }    

//         x = prompt("Введите число");
//     }
//     if (isFinite(x) == true) {
//         alert("Вы ввели число!");
//     }
// }

// readNumber();

// function random(min, max) {
//     return Math.random() * (max - min) + min;
// }

// alert (random(1, 5));

// function random(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }

// alert (random(1, 5));

// let str = "Ослик Иа-Иа посмотрел на виадук";
// let target = "Иа";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   alert( pos );
// }

// alert ( "z".codePointAt(0) );
// alert( "\u005a" );

// let s = "";

// for (let i = 0; i < 999; i++) {
//     s += String.fromCodePoint(i);
// }

// alert (s);

// function ukFirst(string) {
//     if (string != "") {
//         string = string[0].toUpperCase() + string.slice(1);
//         return string;
//     }
//     else {
//         return "Строка пустая!";
//     }
// }

// // alert( ukFirst("bitches lol ") );
// let string = prompt( "Введите строку" );
// alert( ukFirst(string) );

// let checkSpam = (str) => str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx") ? true : false

// alert (checkSpam('buy ViAgRA now'));
// alert (checkSpam('free XXX'));
// alert (checkSpam("innocent rabbit"));

// function truncate (str, maxlength) {
//     if (str.length <= maxlength) {
//         return str;
//     } else {
//         return str.slice(0, maxlength) + "...";  
//     }
// }

// alert ( truncate("abobadwwd", 5) );

// let s = "aboba";
// alert( s.slice(0, 4) );

// function extractCurrencyValue(str) {
//     str = str.slice(1, str.length);
//     return +str;
// }

// alert( extractCurrencyValue('$120') === 120 );

// let styles = ["Джаз", "Блюз"];
// alert(styles);

// styles.push("Рок-н-ролл");
// alert(styles);

// styles[Math.trunc(styles.length / 2)] = "Классика";
// alert(styles);

// alert(styles.shift());
// alert(styles);

// styles.unshift("Рэп", "Регги");
// alert(styles);

// function sumInput() {
//     let sum = [];
//     let final = 0;

//     while (true) {

//         let a = prompt( "Вводите числовые значения" );

//         if (a == "" || a == null || !isFinite(a)) break;

//         sum.push(+a);
//     }

//     for (let i of sum) {
//         final += i;
//     }

//     return (final)
// }

// alert(sumInput());

// function getMaxSubSum(arr) {
//     let sum = 0
//     let maxsum = 0
    
//     for (let i = 0; i <= arr.length - 1; i++) {
//         for (let j = i; j <= arr.length - 1; j++) {
//             sum += arr[j];
//             if (sum > maxsum) {
//                 maxsum = sum;
//             } 
//         }
//         sum = 0;
//     }

//     if (maxsum < 0) {
//         return 0
//     } else {
//         return maxsum;
//     }
// }

// alert(getMaxSubSum([-1, 2, 3, -9, 11]));

// if (sum < maxsum) {
        //     sum = 0
        // } if (sum == maxsum) {
        //     sum += arr[j]
        // } else {
        //     maxsum = sum
        // }

// function camelize(str) {
//     let arr = str.split("-");
//     let result = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));  
//     return result.join("");
// }

// alert( camelize("my-long-world") );

// let up = (someStr) => String(someStr).toUpperCase();
// let newstr = arr.join("");
// return newstr;

// function filterRange(arr, a, b) {
//     let newArr = []
//     for (let value of arr) {
//         if (value >= a && value <= b) {
//             newArr.push(value);
//         }
//     }  

//     return newArr;
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)

// function sortElement(a, b) {
//     if (a < b) return 1
//     if (a > b) return -1
//     if (a == b) return 0
// }

// let arr = [5, 2, 1, -10, 8];

// arr.sort(sortElement);

// alert(arr);

// function copySorted(a, b) {
//     if (a > b) return 1
//     if (a == b) return 0
//     else return -1
// }

// function copySorted(arr) {
//     let newArr = []
//     for (let elem of arr) {
//         newArr.push(elem);
//     }
//     return newArr.sort();
// }

// function copySorted(arr) {
//     return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// function Calculator () {
//     this.nameOfOperation = [];
//     this.doOperation = [];

//     this.calculate = function(str) {
//         let arr = str.split(" ");
//         let indexOperation = this.nameOfOperation.indexOf(arr[1]);
//         return this.doOperation[indexOperation](arr[0], arr[2]);
//     }

//     this.addMethod = function(name, func) {
//         this.nameOfOperation.push(name);
//         this.doOperation.push(func);

//         // alert(this.nameOfOperation);
//         // alert(this.doOperation);
//     }
// }

// // let calc = new Calculator;

// // alert( calc.calculate("3 + 7") );

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 * 3");
// alert( result );
// result = powerCalc.calculate("2 / 3");
// alert( result );
// result = powerCalc.calculate("2 ** 3");
// alert( result );


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = []
// // for (let user of users) {
// //     names.push(user.name)
// // }

// names = users.map(item => item.name);

// alert( names ); // Вася, Петя, Маша

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];
// let usersChange = users.slice();

// for (let user of usersChange) {
//     user.fullName = String(String(usersChange.name) + " " + String(usersChange.surname));
//     delete user.name;
//     delete user.surname;
// }

// alert( usersChange[0].id ) // 1
// alert( usersChange[0].fullName ) // Вася Пупкин

// let fullNameArray.push()
// let fullnameArray = users.map((name, surname) => String(name) + " " + String(surname));


// let usersMapped = users.slice();

// usersMapped.map(() => {
//     for (let i = 0; i < usersMapped.length; i++) {
//         delete usersMapped[i].name;
//         delete usersMapped[i].surname;
//         usersMapped[i].fullName = fullnameArray[i];
//     }

// })
/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/



// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// function sortByAge (arr) {
//     arr.sort((a, b) => a.age > b.age ? 1 : -1)
// }

// sortByAge(arr);



// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// function shuffle(arr) {
//     newArr = [];
//     let newIndex = Math.round(Math.random());


//     if (arr[0] )
// }

// function sorted(a, b) {
//   let random = Math.round(Math.random() * 2);

//   if (random == 1) {
//     if (a > b) return 1
//     else return -1
//   }

//   if (random == 0) {
//     if (a < b) return 1
//     else return -1
//   }

//   if (random == 2) {
//     if (a == b) return 1
//     else return -1
//   }
// }


// function shuffle(arr) {
  // return arr.sort(sorted);
  //let newArr = new Array(3);
  // while (True) {
  //   let placeInNewArr = Math.round(Math.random() * 2);

  //   if (newArr[placeInNewArr].isFinite == true) continue

  //   let numberElementInOldArr = Math.round(Math.random() * 2);

  //   if ()
  
  //   newArr[placeInNewArr] = arr[numberElementInOldArr];
  // }
  
  // let places = [];
  // let position = Math.round(Math.random() * 2);

  // arr[0] = places[position];
  // arr[2] = 
  // return places;

//   let places = [];
//   let position = Math.round(Math.random() * 2);
//   places.push(position);

//   let position2 = position;

//   while (position2 == position) {
//     position2 = Math.round(Math.random() * 2);
//   }

//   places.push(position2);

//   let position3 = position;

//   while (position3 == position2 || position3 == position) {
//     position3 = Math.round(Math.random() * 2);
//   }

//   places.push(position3);

//   let newArr = [];

//   newArr[position] = arr[0];
//   newArr[position2] = arr[1];
//   newArr[position3] = arr[2];
//   return newArr;
// }

// // let arr = [1, 2, 3];

// // alert(shuffle(arr));

// let count = {
//   '123': 0,
//   '132': 0,
//   '213': 0,
//   '231': 0,
//   '321': 0,
//   '312': 0
// };

// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join('')]++;
// }

// // показать количество всех возможных вариантов
// for (let key in count) {
//   alert(`${key}: ${count[key]}`);
//}

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// function getAverageAge(arr) {
//   let ages = arr.map((arr) => arr.age);
//   let count = 0;
//   for (let age of ages) {
//     count += age;
//   }

//   return count / ages.length;
// }

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// function unique(arr) {
//   let newStrings = []
//   for (let word of strings) {
//     if (!newStrings.includes(word)) {
//       newStrings.push(word);
//     }
//   }
//   return newStrings;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) ); // кришна, харе, :-O

// let range = [1, 2, 3, 4, 5];
// let arr = Array.from(range, num => num * num);

// alert(arr); // 1,4,9,16,25

// function unique(arr) {
//   return Array.from(new Set(arr));
//   // for (let value of arr) {
//   //   set.add(value);
//   // }
  
//   // let newArr = [];

//   // set.forEach((value, value1, set) => newArr.push(value));
  
//   // return newArr;
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];



// alert( unique(values) ); // Hare,Krishna,:-O

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//   let set = new Set();
//   let mas = new Array(arr);

//   for (let word of mas) {
//     for (let i = 1; i < mas.length - 1; i++) {
//       if (word.length == mas[i].length && word != mas[i]) {
//         let count = 0;
//         for (let j = 0; j < word.length; j++) {
//           if (arr[i].include(word[j])) {
//             count += 1
//           }
//         if (count == word.length) {         
//           set.add(word);
//           delete mas[i];
//           count = 0
//         }
//         else count = 0;
//         }
//       }
//     }
//   }

//   return Array.from(set);
// }
//   // for (let word of arr) {
//   //   let changeWord = word.toLowerCase();
//   //   set.add()
//   // }


//   // if (word.length == word2.length && word)
//   // for (let word of arr) {
      
//   // }


// // let arr1 = [1, 2, 3];
// // let arr2 = [2, 1, 3]
// // let set1 = new Set(arr1);
// // let set2 = new Set(arr2);

// // function check(set1, set2) {
// //   if (set1 == set2) return true;
// //   else return false
// // }

// // alert (check(set1, set2));

// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// keys = Array.from(keys);
// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };


// function sumSalaries(s) {
//   let sum = 0
//   for (let value of Object.values(s)) {
//     sum += value;
//   }
//   return sum
// }

// // alert(Object.values(salaries));

// alert( sumSalaries(salaries) ); // 650

// function count(obj) {
//   return Object.keys(obj).length
// }


// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2

// let user = { name: "John", years: 30 };

// // ваш код должен быть с левой стороны:
// let {
//   name,
//   years: age,
//   isAdmin: isAdmin = false
// } = user;

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// let salaries = {};

// function topSalary(salaries) {
//   if (Array.from(Object.entries(salaries)).length == 0) return null

//   let {John, Pete, Mary} = salaries;

//   for (let obj of Object.entries(salaries)) {
//     if (obj[1] == Math.max(John, Pete, Mary)) return obj[0];
//   }

// }

// function topSalary(salaries) {

//   let max = 0;
//   let maxName = null;

//   for(let [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }

//   return maxName;
// }

// alert( topSalary(salaries) )

// let now = new Date(0);
// alert(now);

// // 0 соответствует 01.01.1970 UTC+0
// let Jan01_1970 = new Date(0);
// alert( Jan01_1970 );

// // теперь добавим 24 часа и получим 02.01.1970 UTC+0
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// alert( Jan02_1970 );

// // текущая дата
// let date = new Date();

// // час в вашем текущем часовом поясе
// alert( date.getHours() );

// // час в часовом поясе UTC+0 (лондонское время без перехода на летнее время)
// alert( date.getUTCHours() );

// если вы в часовом поясе UTC-1, то выводится 60
// если вы в часовом поясе UTC+3, выводится -180
// alert( new Date().getTimezoneOffset() );

// alert(Date.now());

// let date = new Date(2012, 1, 20, 3, 12);

// alert(date);

// let date = new Date(2012, 0, 3);  // 3 января 2012 года

// let shorts = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];


// function getWeekDay(date) {
//   return shorts[date.getDay()];
// }


// alert( getWeekDay(date) );        // нужно вывести "ВТ"


// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getLocalDay(date) );       // вторник, нужно показать 2

// function getLocalDay(date) {
//   let day = date.getDay();

//   if (day == 0) day = 7;

//   return day;
// }

// new Date(0, 0, 0, 0, 0, 0, date1.setMilliseconds(time))
// function getDateAgo(date, days) {
//   let time = date.getTime() - days * 24 * 60 * 60 * 1000;
//   let dateFrom = new Date(time)
//   return dateFrom.getDate();
// }
// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month);
//   month = date.getMonth();
//   for (let i = 28; i <= 32; i ++) {
//     let date1 = new Date(year, month, i);
//     if (date1.getMonth() != month) return i - 1
//   }

// }

// alert(getLastDayOfMonth(2012, 1));

// let date = new Date(2022, 3, 17, 23, 0, 0, 0);
// // function getSecondsToday(date) {
// //   // let date1 = newDate(date.getYear(), date.getMonth(), date.getDate());
// //   return date.getSeconds() + date.getMinutes() * 60 + date.getHours() * 60 * 60
// // }

// // alert(getSecondsToday(date))

// function getSecondsToTomorrow(date) {
//   // return 24 * 60 * 60 - date.getHours() * 3600  - date.getMinutes() * 60 - date.getSeconds();
//   let date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
//   return Math.round((date1 - date) / 1000);
// }

// alert( getSecondsToTomorrow(date) );

// let newDate = new Date();

// alert( newDate );

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

// function formatDate(date) {
//   let dateNow = new Date();
//   if (dateNow - 1 <= date) return "Прямо сейчас";
//   if (dateNow - 59 * 1000 <= date) return `${Math.abs(date.getSeconds() - dateNow.getSeconds())} сек. назад`;
//   if (dateNow - 5 * 60 * 1000 <= date) return `${Math.abs(date.getMinutes() - dateNow.getMinutes())} мин.назад`;
//   else return `${date.getFullYear()}.${date.getMonth()}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
// }

// let user = {
//   name: "Василий Иванович",
//   age: 35
// };

// let x = JSON.parse(JSON.stringify(user));

// alert(x.name);

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//   place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert( JSON.stringify(meetup, function replacer(key, value) {
//   return (key != "" && value == meetup) ? undefined : value;
// }));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/

// function sum(n) {
//   let count = 0;
//   for (let i = 0; i < n + 1; i++) {
//     count += i;
//   }
//   return count;
// }

// function sum(n) {
//   return (n == 1) ? n : n + sum(n-1);
// }

// function sum(n) {
//   return (1 + n) / 2 * n;
// }

// alert( sum(100) );

// function factorial(n) {
//   return (n == 1) ? n : n * factorial(n - 1)
// }

// alert ( factorial(5) );

// function fib(n) {
//   let mas = [1, 1];
//   if (n >= 3) {
//     for (let i = 2; i <  n; i++) {
//       mas.push(mas[i - 2] + mas[i - 1]);
//     }
//   } else {
//     return mas[n-1]
//   }
//   return mas[n-1];
// }

// alert( fib(1000) );

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(list) {
//   let tmp = list;
//   while (tmp) {
//     alert(tmp.value);
//     tmp = tmp.next;
//   } 
// }

// function printList(list) {
//   if (list.next == null) {
//     alert(list.value);
//   } else {
//     alert(list.value);
//     printList(list.next);
//   }
// }


//printList(list);

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(list) {
//   let arr = [];
//   let tmp = list;

//   while (tmp) {
//     arr.push(tmp.value);
//     tmp = tmp.next
//   }

//   for (let i = arr.length - 1; i > -1; i--) {
//     alert(arr[i]);
//   }
// }


// function printList(list) {
//   if (list.next) {
//     printList(list.next);
//   }

//   alert(list.value);
// }

// printList(list);

// let multivers = {
//   sum(...mas) {
//     let count = 0;
//     for (let i of mas) count += i;
//     return count;
//   }
// }


// // function multiplex(...arr) {
// //   let value = 1;
// //   for (let i of arr) value *= i;
// //   return value;
// // }
// alert(multivers.sum(5, 424, -1241, 1424));

// function makeWorker() {
//   let name = "Pete";

//   return function() {
//     alert(name);
//   };
// }

// let name = "John";

// // create a function
// let work = makeWorker();

// // call it
// work(); 

// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // что будет показано: "John" или "Pete"?

// function f() {
//   let value = Math.random();

//   function g() {
//     debugger; // в консоли: напишите alert(value); Такой переменной нет!
//   }

//   return g;
// }

// let g = f();
// g()

// function sum(a) {
//   return function(b) {
//     return a + b;
//   }
// }

// alert( sum(4)(5) );

// function inBetween(a, b) {
//   return function(x) {
//     return x >= a && x <= b;
//   }
// }

// function inArray(mas) {
//   return function(x) {
//     return mas.includes(x);
//   }
// }


// /* .. ваш код для inBetween и inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

// function byField(str) {
//   return (a, b) => a[str] > b[str] ? 1 : -1;
// }

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// users.sort(byField('name'));
// alert(users[0].name);
// users.sort(byField('age'));
// alert(users[0].name);

// function makeArmy() {
//   let shooters = [];

//   let i = 0;

//   while (i < 10) {
//     let k = i;
//     let shooter = function() { // функция shooter
//       alert( k ); // должна выводить порядковый номер
//     };

//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

// if (!window.Promise) {
//   alert("Ваш браузер очень старый!");
// }

// window.User = {
//   name: "Nick",
//   age: 23
// }

// alert( User.name );
// alert( User.age );

// function makeCounter() {
//   counter.count = 0;

//   counter.set = function(value) {
//     counter.count = value;
//   }

//   counter.decrease = function() {
//     counter.count--; 
//   }

//   function counter() {
//     return counter.count++; 
//   }

//   return counter;
// }


// let counter = makeCounter();

// alert( counter() ); // 0
// alert( counter() ); // 1

// counter.set(10); // установить новое значение счётчика

// alert( counter() ); // 10

// counter.decrease(); // уменьшить значение счётчика на 1

// alert( counter() ); // 10 (вместо 11)

// function sum(a) {
//   let currentSum = a;
//   function f(b) {
//     currentSum += b;
//     return f;
//   }
//   f.toString = function() {
//     return currentSum;
//   }
//   return f;
// }
// alert( sum(1)(2)(2)(5) );

// function sayHi(phrase, who) {
//   alert( phrase + ', ' + who );
// }

// setTimeout(sayHi, 10000, "Привет", "Джон"); // Привет, Джон

// let timerId = setTimeout(() => alert("ничего не происходит"), 1000);
// alert(timerId); // идентификатор таймера

// clearTimeout(timerId);
// alert(timerId); // тот же идентификатор (не принимает значение null после отмены)

// // повторить с интервалом 2 секунды
// let timerId = setInterval(() => alert('tick'), 2000);

// // остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);\

// function printNumbers(from, to) {
//   let a = from;

//   // let TimeOut = setInterval(func(), 1000);
//   let TimeOut = setInterval(function(){
//     alert(a);
//     if (a == to) clearInterval(TimeOut);
//     else a++;
//   }, 1000);
// }
// printNumbers(5, 10);

// function printNumbers(from, to) {
//   let a = from;

//   setTimeout(function f() {
//     alert(a)
//     if (a < to) {
//       setTimeout(f, 1000);
//     }
//     a++;
//   }, 1000);
// }
// printNumbers(10, 20);

// let arr = [1, 2, 3];
// let x = arr;
// alert(arr);

// function work(a, b) {
//   alert( a + b ); // произвольная функция или метод
// }


// // function spy(func, hash) {
// //   let cache = new Map();

// //   return function() {
// //     let key = hash(arguments);
// //     if (cache.has(arguments)) {
// //       return cache.get(key);
// //     }
// //     let result = func.call(this, ...arguments);
// //     cache.set(key, result);
// //     return result;
// //   }
// // }

// function spy(func) {

//   function wrapper(...args) {
//     wrapper.calls.push(args);
//     return func.apply(this, arguments);
//   }

//   wrapper.calls = [];

//   return wrapper;
// }

// // function hash(args) {
// //   return args[0] + "," + args[1];
// // }


// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

// function f(x) {
//   alert(x);
// }

// // function delay(func, time) {
// //   let mas = new Map();
// //   return function(x) {
// //     let key = hash(arguments);
// //     if (mas.has(key)) {
// //       setTimeout(func, time);
// //       return x
// //     }
// //     mas.push(func(x))
    
// //     return mas;
// //   }
// // }

// function delay (f, ms) {
//   return function() {
//     setTimeout (() => f.apply(this, arguments), ms);
//   };
// }

// // function hash(arg) {
// //   return [].join.call(arg);
// // }
// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс

// let f = debounce(alert, 1000);

// f(1); // выполняется немедленно
// f(2); // проигнорирован

// setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => f(4), 1100); // выполняется
// setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

// function debounce(func, ms) {
//   return function(x) {
    
//     return func(x)
//   }
// }

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };

// // askPassword(() => login(true).bind(user), () => login(false).bind(user)); 
// askPassword(user.login.bind(user, true), user.login.bind(user, false)); 

// let user = {
//   name: "Jon",
//   surname: "Chupin",
//   defaultSex: "man"
// }
// Object.defineProperty(user, "sex", {
//   get() {
//     return `${this.name} - ${this.defaultSex}`      
//   },
//   set(value) {
//     this.defaultSex = `${value}`
//   }
// })
// user.sex = "woman"
// alert(user.sex);

// let user = {
//   name: "John",
//   surname: "Smith",

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true
// };

// alert(admin.fullName); // John Smith (*)

// // срабатывает сеттер!
// admin.fullName = "Alice Cooper"; // (**)
// alert(admin.name); // Alice
// alert(admin.surname); // Cooper
// alert(user.fullName);

// let head = {
//   glasses: 1
// };

// let table = {
//   __proto__: head,
//   pen: 3
// };

// let bed = {
//   __proto__: table,
//   sheet: 1,
//   pillow: 2
// };

// let pockets = {
//   __proto__: bed,
//   money: 2000
// };

// alert(pockets.glasses)

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach = food;
//   }
// };

// let speedy = {

//   __proto__: hamster
// };

// let lazy = {

//   __proto__: hamster
// };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// alert( lazy.stomach ); // apple

// function F(name)
// {
//   this.name = name;
//   // this.value = 1000;
//   // this.method()
//   // {
//   //   alert($`Меня зовут {name}, У меня {value} долларов`)
//   // }
// }

// let obj = new F("Nick");

// let obj2 = new obj.constructor("Pete");
// obj2.constructor = {}
// alert(F.prototype.constructor)

// function f() {
//   alert("Hello!");
// }
// Function.prototype.defer = function(ms) {
//   setTimeout(this, ms)
// };
// f.defer(1000); // выведет "Hello!" через 1 секунду

// function f(a, b) {
//   alert( a + b );
// }
// Function.prototype.defer = function(ms) {
//   // return function func(a, b) {
//   //   setTimeout(this, func)
//   //   cancelIdleCallback.
//   // }
//   let f = this;
//   return function(...args) {
//     setTimeout(() => f.apply(this, args), ms)
//   }
// }
// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

// let me = {
//   name: "Nick"
// }
// // let you = Object.create(me);
// let you = {}
// Object.setPrototypeOf(you, me)
// alert(Object.getPrototypeOf(you) === me)
// alert(you.name);

// let dictionary = Object.create(null, {
//   toString: { // определяем свойство toString
//     value() { // значение -- это функция
//       return Object.keys(this).join();
//     }
//   }
// });
// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// // только apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//   alert(key); // "apple", затем "__proto__"
// }

// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"

// class User {
//   constructor(name) { this.name = name; }
//   sayHi() { alert(this.name); }
// }

// // класс - это функция
// alert(typeof User); // function

// // ...или, если точнее, это метод constructor
// alert(User === User.prototype.constructor); // true

// alert(Object.getOwnPropertyNames(User.prototype));

// function Clock({ template }) {
  
//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   this.stop = function() {
//     clearInterval(timer);
//   };

//   this.start = function() {
//     render();
//     timer = setInterval(render, 1000);
//   };

// }

// class Clock {
//   constructor({template}) {
//     this.template = template;
//   }
  
//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }
// let clock = new Clock({template: 'h:m:s'});
// clock.start();

// class Animal {

//   constructor(name) {
//     this.name = name;
//   }

// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name)
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// alert(rabbit.name);

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// class ExtendedClock extends Clock {
//   constructor(options)
//   {
//     super(options);
//     let { precision=1000 } = options;
//     this.precision = precision;
//   }

//   start() {
//     this.render()
//     this.timer = setInterval (() => this.render, this.precision)
//   }
// }

// class Rabbit extends Object {
//   constructor(name) {
//     super()
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit("Кроль");

// alert( rabbit.hasOwnProperty('name') ); // Ошибка

// class CoffeeMachine {
//   #waterLimit = 200;

//   #checkWater(value) {
//     if (value < 0) throw new Error("Отрицательный уровень воды");
//     if (value > this.#waterLimit) throw new Error("Слишком много воды");
//   }
// }

// let coffeeMachine = new CoffeeMachine();

// // снаружи  нет доступа к приватным методам класса
// coffeeMachine.#checkWater(); // Error
// coffeeMachine.#waterLimit = 1000; // Error
// примесь

// try {
//   alert(hello);
// }
// catch(error) {
//   alert(error.message);
// }

// function func() {

//   try {
//     return "hello";

//   } catch (e) {
//     /* ... */
//   } finally {
//     alert( 'finally' );
//   }
// }

// alert( func() ); // сначала срабатывает alert из finally, а затем этот код
  // window.onerror = function(message, url, line, col, error) {
  //   alert(`${message}\n В ${line}:${col} на ${url}`);
  // };

  // function readData() {
  //   badFunc(); // Ой, что-то пошло не так!
  // }

  // readData();
// Создайте класс FormatError, который наследует от встроенного класса SyntaxError.

// Класс должен поддерживать свойства message, name и stack.

// Пример использования:

// class FormatError extends SyntaxError {
//   super(message) {
//     this.name = this.constructor.name;
//   }
// }

// let err = new FormatError("ошибка форматирования");

// alert( err.message ); // ошибка форматирования
// alert( err.name ); // FormatError
// alert( err.stack ); // stack

// alert( err instanceof FormatError ); // true
// alert( err instanceof SyntaxError ); // true (потому что наследует от SyntaxError)

// let promise = new Promise(function(resolve, reject) {
//   // эта функция выполнится автоматически, при вызове new Promise

//   // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
//   setTimeout(() => resolve("done"), 1000);
// });

// function delay(ms) {
//   return new Promise(function(resolve) {
//     setTimeout(() => resolve(ms), ms)
//   })
// }

// delay(3000).then(() => alert('выполнилось через 3 секунды'));
// function sumOfN(n) {
//   let array = [0]; 
//   let interval = 0;
  
//   while (array.length != n + 1)
//     {
//       interval += array.length;
//       array.push(interval);
//     }
//   return array;
// };

// alert(sumOfN(-4))


// let x = 15;

// s = x.join("");

// alert(typeof s);

// function findOutlier(integers) {
//   let evenArray = [];
//   let oddArray = [];
  
//   for (let number of integers) {
//     if (number % 2 == 0) evenArray.push(number);
//     else oddArray.push(number);
//     alert(`oddArray: ${oddArray}`)
//     alert(`evenArray: ${evenArray}`)
//     if (evenArray.length > oddArray.length && oddArray.length > 0) return oddArray[oddArray.length - 1];
//     if (oddArray.length > evenArray.length && evenArray.length > 0) return evenArray[evenArray.length - 1];
//   }
// }

// alert(findOutlier([1, 2, 3]))

// alert(isFinite("123"))

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
// }



// async function loadJson(url) {
//   let response = await fetch(url);

//   if (response.status == 200) {
//     let json = await response.json();
//     return json;
//   }
//   throw new Error(response.status);
// }

// loadJson('no-such-user.json') // (3)
//   .catch(alert); // Error: 404

// Ниже пример из раздела Цепочка промисов, 
// перепишите его, используя async/await 
// вместо .then/catch.

// В функции demoGithubUser замените рекурсию 
// на цикл: используя async/await, 
// сделать это будет просто.

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   let response = await fetch(url);
//   if (response.status == 200) {
//     return response.json();
//   } else {
//     throw new HttpError(response);
//   }
// }

// // Запрашивать логин, пока github не вернёт существующего пользователя.
// async function demoGithubUser() {

//   let user;
//   while(true) {
//     let name = prompt("Введите логин?", "iliakan");

//     try {
//       user = await loadJson(`https://api.github.com/users/${name}`);
//       break; // ошибок не было, выходим из цикла
//     } catch(err) {
//       if (err instanceof HttpError && err.response.status == 404) {
//         // после alert начнётся новая итерация цикла
//         alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//       } else {
//         // неизвестная ошибка, пробрасываем её
//         throw err;
//       }
//     }
//   }


//   alert(`Полное имя: ${user.name}.`);
//   return user;
// }

// demoGithubUser();


// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   // ...что здесь написать?
//   // чтобы вызвать wait() и дождаться результата "10" от async–функции
//   // не забывайте, здесь нельзя использовать "await"
  
//   wait().then(result => alert(result));
// }

// f();


// function getLengthOfMissingArray(arrayOfArrays) {
//   // let newArray = arrayOfArrays.map(mas => mas.length).sort((a, b) => a - b)
//   for (let i = 0; i < newArray.length - 2; i++) {
//     if (newArray[i] != newArray[i + 1] - 1) return newArray[i] + 1
//   }
// }


// // console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ]));
// console.log(getLengthOfMissingArray([ 1 , 3  ])

var wealthUnequal = [0, 10];

redistributeWealth(wealthUnequal);

function redistributeWealth(wealth) {
  var count = wealth.length;
  var summa = wealth.reduce((sum, current) => sum + current);
  wealthUnequal = [];
  for (let i = 0; i < count; i++) wealthUnequal.push(summa/count);
}  