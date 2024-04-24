function myFn() {
    return { a: 1, b: 2 }
}

const storeVal = myFn();

let firstVal, secondVal;
firstVal = storeVal.a;
secondVal = storeVal.b;

console.log(firstVal, secondVal);

function dest_assignment() {
    return { a: 1, b: 2, c: 3 };
}

let firstVal1, secondVal1, thirdVal1;

({
    a: firstVal1,
    b: secondVal1,
    c: thirdVal1,
} = dest_assignment())

console.log(firstVal, secondVal1, thirdVal1);