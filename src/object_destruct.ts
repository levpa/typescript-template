const addFunction = (a: number = 5, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output)

const myButton = document.querySelector('button');

if (myButton) {
    myButton.addEventListener('click', event => console.log(event))
}

console.log(addFunction())

printOutput(addFunction(3, 2))

// const hobbies = ['Sports', 'Cooking'];
// const activeHobbies = ['Hiking'];

// object destructing
const myPerson = {
    name: 'Max',
    age: 30
}

const { name: myName, age: myAge } = myPerson

console.log(myAge, myName, myPerson)
