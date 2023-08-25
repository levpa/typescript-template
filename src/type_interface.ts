type Greetable = {
  readonly name?: string;
  age: number;
  greet(phrase: string): void;
};

class Person implements Greetable {
  name?: string;
  age: number = 20;

  constructor(n?: string) {
    if (n) this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

const my: Greetable = new Person('Leo');
console.log(my);
