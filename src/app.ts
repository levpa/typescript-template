class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log('Department: ' + this.name);
    }
}

const myClass = new Department('Lev');

console.log(myClass)

myClass.describe();

const myClassCopy = { name: 'satisfies', describe: myClass.describe }

myClassCopy.describe()