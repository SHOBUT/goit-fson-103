/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

// function checkAnsfer () {
//     const string = prompt("Яка офіційна назва JavaScript?")
//     if (string === "ECMAScript") {
//         alert("Вірно!")
//     } else {
//         alert("Не знаєте? ECMAScript!")
//     }
// }
// checkAnsfer();

// /**
//  *? У змінній min лежить число від 0 до 59.
//  *? Визначте, в яку чверть години потрапляє
//  *? це число (у першу, другу, третю чи четверту).

// const min = 100;
// if (min <= 15) {
//   alert(1);
// } else if (min >= 16 && min <= 30) {
//   alert(2);
// } else if (min >= 31 && min <= 45) {
//   alert(3);
// } else {
//   alert(4);
// }

/**
Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 70 === 01:10
 */

// const number = prompt(`Введіть число`);
// const hours = String(Math.floor(number / 60)).padStart(2, "0");
// const minutes = String(number % 60).padStart(2, "0");

// console.log(`${hours}:${minutes}`);

/**
 *? За допомогою циклу for складіть усі парні числа від min до max
 */
// const max = 50;
// const min = 0;
// let total = 0;

// for (let i = min; i <= max; i++) {
//   if (!(i % 2)) {
//     // total = total + i;
//     total += i;
//   }
// }
// console.log(total);

/**
 *? Напишіть цикл, який виводить у консоль
 *? всі непарні числа  від max до min  за спаданням
 */

// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i--) {
//   if (i % 2) {
//     console.log(i);
//   }
// }

/**
*? Напишіть код, який запитуватиме
*? логін за допомогою prompt та логувати результат
*? у консоль браузера
    
*? Якщо відвідувач вводить "Адмін",
*? то prompt запитує пароль.
*? Якщо нічого не ввели або натиснуто клавішу Esc
*? вивести рядок "Скасовано"
*? В іншому випадку вивести рядок "Я вас не знаю"
    
*? Пароль перевіряти так:
*? Якщо введено пароль "Я головний",
*? то вивести рядок "Здрастуйте!"
*? інакше виводити рядок "Невірний пароль!"
 */
// const login = prompt("Введіть логін");
// if (login === "Адмін") {
//   const password = prompt("Введіть пороль");
//   if (password === "Я головний") {
//     alert("Добрий день!");
//   } else {
//     alert("Невірний пароль!");
//   }
// } else if (login === "" || login === null) {
//   alert("Скасовано");
// } else {
//   alert("Я вас не знаю!");
// }

//~ TODO:==========================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12];

// const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12];
// function findSmallerNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return;
//   }
//   let total = numbers[0];
//   for (const num of numbers) {
//     if (num < total) {
//       total = num;
//     }
//   }
//   return total;
// }

// console.log(findSmallerNumber(numbers));

//TODO:==========================
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.

// const arr = ["Джаз", "Блюз", "Рок-н-рол", "Реггі", "Реп"];
// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// logItems(arr);

//TODO:==============================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function createNewArray(array) {
//   if (!Array.isArray(array)) {
//     return "array is not array";
//   }
//   let newArray = [];
//   for (let i = 0; i < array.length; i += 2) {
//     newArray.push(array[i] + array[i + 1]);
//   }
//   return newArray;
// }

// console.log(createNewArray(someArr));

//TODO:==============================
// Напишіть рішення, яке обчислює суму
// Квадратного коріння для всіх чисел у яких квадратний корінь буде цілим числом.

// const arr = [4, 3, 5, 16, 16, 33, 4, 9];
// function calcSum(array) {
//   let total = 0;
//   for (const num of array) {
//     const a = Math.sqrt(num);
//     if (Number.isInteger(a)) {
//       total += a;
//     }
//   }
//   return total;
// }

// console.log(calcSum(arr));

//TODO:==========================
//Напишіть код для пошуку пароля в масиві
//Через includes і тернарний оператор

// const passwords = ["ajax123", "polly456", "mango789", "semiBold"];
// const password = "semiBold";

// function findPassword(arrayPasswords, password) {
//   return arrayPasswords.includes(password) ? "autorized" : "invalid password";
// }

// console.log(findPassword(passwords, password));

/**
 *? Записати масив, const arr = ['BEST', 'the', 'foo', 'is', 'JS' ]
 *? розвернути масив,
 *? вирізати foo,
 *? перевести його в рядок розділений пробілами
 *? Очікуваний результат "JS is the BEST"
 */

/* массив arr не має мутуватися */

// const arr = ["BEST", "the", "foo", "is", "JS"];
// function arrayToString(array, delString) {
//   const reversed = array.toReversed();
//   // if (reversed.includes(delString)) {
//   //   reversed.splice(reversed.indexOf(delString), 1);
//   // }
//   const idx = reversed.indexOf(delString);
//   if (idx !== -1) {
//     reversed.splice(idx, 1);
//   }
//   return reversed.join(" ");
// }

// console.log(arrayToString(arr, "foo"));

// arr
//   .slice(0, arr.indexOf("foo"))
//   .concat(arr.slice(arr.indexOf("foo") + 1))
//   .reverse()
//   .join(" ");
