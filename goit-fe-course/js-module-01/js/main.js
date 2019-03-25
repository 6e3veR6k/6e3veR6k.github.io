'use strict';
/*
 * Задача 1
*/
const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;

const userInput = prompt('Enter the password');


if (!userInput) {
    message = 'Отменено пользователем!';
}
else if (userInput === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
}
else {
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
    }
    else {
        console.log(`Вы купили ${quantity} дроидов, на счету осталось ${balance} кредитов.`);
    }
}

const quantities = [3, 5, 8, 12];

for (const quantity of quantities) {
    getTotalCost(quantity);
}

/*

 * Задача 3

Пользователь может оформить доставку товара к себе в страну, указав ее в переменной country, но доставка есть не везде.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.

Формат сообщения - Доставка в[страна] будет стоить[цена]

Ниже приведен список стран и стоимость доставки.

Китай - 100 кредитов
Южная Америка - 250 кредитов
Австралия - 170 кредитов
Индия - 80 кредитов
Ямайка - 120 кредитов

Если указанной страны нет в списке, то выводи в консоль сообщение 'В вашей стране доставка не доступна'.Протестируй работоспособность кода подставив разные значения в переменную country.

    PS: используй switch
*/

function getTravelCost(country) {
    let cost;

    switch (country.toLowerCase()) {
        case 'китай':
            cost = 100;
            break;
        case 'южная америка':
            cost = 250;
            break;
        case 'австралия':
            cost = 170;
            break;
        case 'индия':
            cost = 80;
            break;
        case 'ямайка':
            cost = 120;
            break;
        default:
            console.log('В вашей стране доставка не доступна');
            break;
    }

    console.log(`Доставка в ${country} будет стоить ${cost}`);
}

const countries = ['Китай', 'Южная Америка', 'Австралия', 'Индия', 'Ямайка'];

for (const country of countries) {
    getTravelCost(country);
}