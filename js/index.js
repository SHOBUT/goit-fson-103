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
//   if (i % 2 === 0) {
//     // total = total + i;
//     total += i;
//   }
// }
// console.log(total);
