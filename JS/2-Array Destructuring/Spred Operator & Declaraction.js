const spred_op = 'The Pain';
console.log(spred_op);
console.log(...spred_op);
console.log([...spred_op]);

const numbers = [1, 2, 3, 5, 7];

function sum(a, b, c, d) {
    return a + b + c + d
}

console.log(sum(...numbers));

function classRoom1() {
    return ['1', '2', '3']
}

let tmp = classRoom1();
let firstClass, secondClass, thirdClass;
let o = {};

o.firstClass = tmp[0];
o.secondClass = tmp[1];
o.thirdClass = tmp[2];

console.log(o.secondClass);
console.log(o);