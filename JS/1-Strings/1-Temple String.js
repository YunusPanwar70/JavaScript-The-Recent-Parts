const name = 'Anderson';
const email = 'ander7@gmail.com';

const msg = 'The name is ' + name + ' For Contact ' + email;
console.log(msg);

console.log(`The name is ${name} for contact ${email}`);

function myFn([first, second, , , third]) {
    console.log(first);
    console.log(second);
    console.log(third);
}

myFn([1, 2, 3, 4, 5]);