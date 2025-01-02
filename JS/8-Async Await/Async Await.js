async function fetchData() {
    console.log('This is 2nd message');
    await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
            name: 'Kyle',
            age: 22,
            designation: 'Devloper'
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then((success => success.json()))
        .then((result => console.log(result)))
}
console.log('This is 1st msg');
fetchData()

try {
    async function fetchJsonData() {
        console.log('This is 1st message');
        await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                Name: 'Kyle',
                Age: 23,
                Designation: 'Devloper'
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((result => result.json()))
            .then((result2 => console.log(result2)))
    }
    console.log('This is 2nd message');
    fetchJsonData();
    console.log('This is 3nd message');
} catch (error) {
    console.log('Error is occured');
}