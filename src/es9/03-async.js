async function* anotherGenerator(i) {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('hello');

async function arrayOfName(array) {
    for await (let value of array) {
        console.log(value);
    }
}
const names = arrayOfName(['John', 'Jane', 'Joe']);
console.log('after')