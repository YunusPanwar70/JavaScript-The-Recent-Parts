const arr = [1, 2, [3, 4], 5];
const [
    num1,
    num2,
    [
        num3,
        num4
    ],
    num5
] = arr;

console.log(num4);

// Object Parameters;

function objPara({ firstName, lastName }) {
    console.log(`Hello ${firstName} ${lastName}`);
}

objPara({ firstName: 'john', lastName: 'byro' });

const obj = {
    firstName: 'john',
    lastName: 'byro'
};

const {
    firstName: first,
    lastName: last
} = obj;
console.log(obj);

const obj3 = {
    userName: 'Kyle',
    userAge: 27,
    nest: {
        userDesignation: undefined,
    },
};

const {
    userName: user,
    userAge: user2,
    nest: {
        userDesignation: designation = 'Developer'
    },
} = obj3;
console.log(designation);