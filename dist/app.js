"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
    console.log(userName);
}
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(53, 12));
const combineValues = function (x, y) {
    return x + y;
};
console.log(combineValues(7, 8));
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('Clicked!');
});
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500);
//# sourceMappingURL=app.js.map