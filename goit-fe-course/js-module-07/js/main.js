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