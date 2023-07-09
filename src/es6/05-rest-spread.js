// arrays destructuring

let fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
let [a,b] = fruits;
console.log(a,b);

// objects destructuring

let person1 = { username: 'david', age: 38, country: 'AR' };
let { username, age, country } = person1;
console.log(username, age, country);


// spread operator

let person2 = { username: 'juan', age: 21 };
let country2 = 'CO';

let data = {id: 1, ...person2, country2};
console.log(data);


// rest 

function sum(num,...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);