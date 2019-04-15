

/* jshint esversion: 6 */
/* jshint strict: global */
/* jshint devel: true */

'use strict';


const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = login => {
    // return login.length >= 4 && login.length <= 16;
    return /^[a-z]{4,16}$/gi.test(login);
};

const isLoginUnique = function (allLogins, login) {
    return !allLogins.includes(login);
};

const isStrEmpty = function (login) {
    return !login || /\s/.test(login);
};

const addLogin = function (allLogins, login) {
    if (isStrEmpty(login)) {
        console.log('Строка пустая.');
        return;
    } else if(!isLoginValid(login)) {
        console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    } else if (!isLoginUnique(allLogins, login)) {
        console.log('Такой логин уже используется!');
    } else {
        allLogins.push(login);
        console.log('Логин успешно добавлен!');
    }
};

// Вызовы функции для проверки

addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisext');
addLogin(logins, 'jqueryisext');
addLogin([], 'jqueryisex');
addLogin([], ' ');
addLogin([], null);
addLogin([], 0);
addLogin([], 1);
addLogin([], undefined);



