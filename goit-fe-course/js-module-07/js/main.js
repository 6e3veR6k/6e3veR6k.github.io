/* jshint esversion: 9 */
/* jshint strict: global */
/* jshint devel: true */

'use strict';


const getAllNames = users => users.map(user => user.name);

console.log(getAllNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

const getUsersByEyeColor = (users, color) => users.filter(user => user.eyeColor == color);

console.log(getUsersByEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// const getUsersByGender = (users, gender) => {
//     return users.reduce((acc, user) => {
//         if (user.gender == gender) {
//             acc.push(user.name);
//         }
//         return acc;
//     }, []);
// };

const getUsersByGender = (users, gender) => users.filter(user => user.gender == gender).map(user => user.name);

console.log(getUsersByGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]