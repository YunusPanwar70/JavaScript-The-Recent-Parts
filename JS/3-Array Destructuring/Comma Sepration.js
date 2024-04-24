const number = [1, 2, 3];

let stored;

[
    num1,
    num2,
    num3
] = stored = number;
console.log(num2);

const number2 = [1, 2, 3];

// we can assign it to an object;

const obj = {};

obj.num1 = number2[0];
obj.num2 = number2[1];
obj.num3 = number2[2];
console.log(obj);

// Assign x value to y and y values to x. & it's long method.

let x = 10;
let y = 20;
{
    let tmp = x;
    x = y;
    y = tmp;
}
console.log(x, y);

// Easy Method

var num1 = 10;
var num2 = 20;

[num1, num2] = [num2, num1];
console.log(num1, num2);

const arr = [1, 2, 3];
let tmp;
[
    first,
    second,
    third,
] = tmp = arr;
console.log(tmp); // 1,2,3;