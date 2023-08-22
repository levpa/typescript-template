"use strict";
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