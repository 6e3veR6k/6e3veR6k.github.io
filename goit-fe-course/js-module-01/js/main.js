'use strict';
/*
 * Задача 1
 */
const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;

const userInput = prompt('Enter the password');


if (!userInput) {
    message = 'Отменено пользователем!';
} else if (userInput === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);

/*
 * Задача 2
 */

let credits = 23580;
const pricePerDroid = 3000;


function getTotalCost(quantity) {
    const balance = credits - quantity * pricePerDroid;

    if (balance < 0) {
        console.log('Недостаточно средств на счету!');
    } else {
        console.log(`Вы купили ${quantity} дроидов, на счету осталось ${balance} кредитов.`);
    }
}

const quantities = [3, 5, 8, 12];

for (const quantity of quantities) {
    getTotalCost(quantity);
}

/*
 * Задача 3
 */

function getTravelCost(country) {

    let cost;
    let haveMatched = false;

    if (!country || typeof country != "string") {
        console.log('В качестве аргумента передана не строка.');
        return;
    }

    switch (country.toLowerCase()) {
        case 'китай':
            cost = 100;
            haveMatched = true;
            break;
        case 'южная америка':
            cost = 250;
            haveMatched = true;
            break;
        case 'австралия':
            cost = 170;
            haveMatched = true;
            break;
        case 'индия':
            cost = 80;
            haveMatched = true;
            break;
        case 'ямайка':
            cost = 120;
            haveMatched = true;
            break;
        default:
            break;
    }


    if (haveMatched) {
        console.log(`Доставка в ${country} будет стоить ${cost}`);
    } else {
        console.log('В вашей стране доставка не доступна');
    }
}

const countries = ['Китай', 'Южная Америка', 'Австралия', 'Индия', 'Ямайка', 'молоко', null, true, 0, 1];

for (const country of countries) {
    getTravelCost(country);
}