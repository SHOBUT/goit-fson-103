/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

function checkAnsfer () {
    const string = prompt("Яка офіційна назва JavaScript?")
    if (string === "ECMAScript") {
        alert("Вірно!")
    } else {
        alert("Не знаєте? ECMAScript!")
    }
}
checkAnsfer();