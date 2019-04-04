'use strict'
// Задание 1

const numbers = [];
let input;

do {

    input = prompt('Введите произвольное число: ');

    if (isNumeric(input)) {
        numbers.push(Number(input));
    } else {
        alert(`Было введено не число, попробуйте еще раз. ${input} - ${typeof input}`)
    }

} while (input !== null)

let total = getSum(numbers);
// console.log(`Общая сумма чисел равна ${total}`);
alert(`Общая сумма чисел равна ${total}`);


function isNumeric(input) {
    // parseFloat(true/false/null/'') returns NaN
    // isFinite chekcs number for Infinity
    return !Number.isNaN(parseFloat(input)) && isFinite(input);
}

function getSum(array) {
    let summ = null;
    if (array) {
        for (const el of array) {
            summ += el;
        }
    }
    return summ;
}

// Задание 2

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let userInput;

do {
    userInput = prompt('Введите пароль: ');

    if (passwords.includes(userInput)) {
        alert('Добро пожаловать!');
    }

    attemptsLeft -= 1;

    if (attemptsLeft > 1) {
        alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
    } else if (attemptsLeft == 1) {
        alert(`Неверный пароль, у вас осталась ${attemptsLeft} попытка`);
    } else {
        alert('У вас закончились попытки, аккаунт заблокирован!');
    }
} while (attemptsLeft > 0 && userInput !== null)