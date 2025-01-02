const arr = [10, 20];
const [num1, num2] = arr;
console.log(num1, num2); //10 20

const arr2 = [10, 20, 30, 40, 50, 60];
const [nestArr, ...rest] = arr2;
console.log(nestArr, rest);

const arr3 = [10, 20, 30, 40, 50, 60];
const [nestArr2, ...rest2] = arr3;
console.log(rest2);

// ------------According to Kyle Simpson--------------

function getAllRecords() {
    return [
        { name: "John", email: "john@example.com" },
        { name: "Alice", email: "alice@example.com" },
        { name: "Bob" }
    ];
}

const tmp = getAllRecords();

const first = tmp[0];
const first2 = tmp[1];

const firstName = first.name;
const firstemail = first.email !== undefined ? first.email : 'kyle7@gmail.com';
console.log(firstemail);

const arr4 = [5, 10];
console.log({ ...arr4 });