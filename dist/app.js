"use strict";
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
const u1 = { name: 'Max', age: 30 };
console.log(greet(u1));
console.log("Older then 20 years? " + isOlder(u1, 20));
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + ' ' + input2.toString();
    }
    return result;
}
const combinedAges = combine('29', '40', 'as-number');
const combineNames = combine('Lev', 'Alina', 'as-text');
console.log(combineNames, combinedAges);
//# sourceMappingURL=app.js.map