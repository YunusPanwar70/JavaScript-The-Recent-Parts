// Tagged Templete Literels we use it in function

const name = 'Anderson';
const age = 21;
const designation = 'Devloper';

function containStrArr(string, ...rest) {
    return rest[2];
}
console.log(containStrArr`Student Name is ${name} And Age is ${age} And Designation is ${designation}`);

//Second Method.

function secondFn(string, expression1, expression2, expression3) {
    return expression1;
}

console.log(secondFn`Teacher Name is ${name} & Age Is ${age} And Work is ${designation}`);