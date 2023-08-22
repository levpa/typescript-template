type User = {
  name: string;
  age: number;
}
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

const u1: User = { name: 'Max', age: 30 };

console.log(greet(u1));
console.log("Older then 20 years? " + isOlder(u1, 20));

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + ' ' + input2.toString();
  }
  return result;
}

const combinedAges = combine('29', '40', 'as-number');
const combineNames = combine('Lev', 'Alina', 'as-text');

console.log(combineNames, combinedAges);
