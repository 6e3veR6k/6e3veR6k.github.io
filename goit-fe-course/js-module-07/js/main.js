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


const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]


const getUserByEmail = (users, email) => users.find(user => user.email == email);

console.log(getUserByEmail(users, 'shereeanthony@kog.com'));
// {объект пользователя Sheree Anthony}
console.log(getUserByEmail(users, 'elmahead@omatom.com'));
// {объект пользователя Elma Head}


const getUsersWithAge = (users, min, max) => users.filter(user => user.age > min && user.age < max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]


const getTotalBalance = users => users.reduce((agr, user) => agr += user.balance, 0);

console.log(getTotalBalance(users)); // 20916


const getUsersByFriend = (users, name) => users.filter(user => user.friends.includes(name)).map(user => user.name);

console.log(getUsersByFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersByFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


const getUniqueSkills = users => users.map(user => user.skills)
    .reduce((acc, skills) => {
        for(let skill of skills) {
            if(!acc.includes(skill)) {
                acc.push(skill);
            }
        }
        return acc;
    }, [])
    .sort();

console.log(getUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]