// var arr = [10, 20, NaN, 30, 40, 50];
// let a = arr.indexOf(30) != -1;
// let b = ~arr.indexOf(20);
// let c = ~arr.indexOf(NaN);
// console.log(c);

// var arr = [10, 20, NaN, 30, 40, 50];
// let a= arr.includes(30, -3)
// console.log(a);

// let arr = [12, 322, 434, [], [[[[[]]]]], [[2]]];
// console.log(arr.flat());

const arr = [1, 2, 3, 4];

// Har element ko 2 se multiply karo aur ek array mein daalo
const result = arr.flatMap(x => [x * 2]);
console.log(result);

const arr1 = [1, [2], [[3]], 4];

// Har element ko 2 se multiply karo aur ek array mein daalo
const result1 = arr1.flatMap(x => [x * 2]);

console.log(result1); 
// Output: [2, 4, 6, 8]
