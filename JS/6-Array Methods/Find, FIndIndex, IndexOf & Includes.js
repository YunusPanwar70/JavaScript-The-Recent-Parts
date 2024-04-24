const arr = [{ a: 10, b: 20 }];
const val = arr.find(function match(v) {
    return v && v.a > 10;
})

const arr2 = [{ a: 10, b: 20 }];
const val2 = arr.findIndex(function match(v) {
    return v && v.a > 100;
})

const arr3 = [10, 20, 30, 40, NaN];
console.log(arr2.includes(NaN));

console.log(~arr3.indexOf(20));