

/* jshint esversion: 6 */
/* jshint strict: global */
/* jshint devel: true */

'use strict';


const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = login => {
    const trimmedLoginLength = login.trim().length;
    return trimmedLoginLength >= 4 && trimmedLoginLength <= 16;
};

const isLoginUnique = function (allLogins, login) {
    return !allLogins.includes(login);
};

const addLogin = function (allLogins, login) {

    if(!isLoginValid(login)) {
        console.log('Ошибка! Логин должен быть от 4 до 16 символов');
        return;
    }

    if (!isLoginUnique(allLogins, login)) {
        console.log('Такой логин уже используется!');
        return;
    }

    allLogins.push(login);
    console.log('Логин успешно добавлен!');

};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisext');
addLogin(logins, 'jqueryisext');
addLogin([], 'jqueryisex');
addLogin([], '        ');



