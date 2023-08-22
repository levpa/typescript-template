function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult( num: number): void {
    console.log('Result: ' + num)
}

printResult(add(53, 12))

type myFunc = (a: number, b: number) => number;

const combineValues: myFunc = function(x, y) {
    return x + y;
}

console.log(combineValues(7, 8))