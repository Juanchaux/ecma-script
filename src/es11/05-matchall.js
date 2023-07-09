const regex = /\b(Apple)+\b/g;

const fruits = 'Apple, Bannana Kiwi, Apple, Orange, Apple, Mango, Apple, Pear, Apple, Strawberry';

for(const match of fruits.matchAll(regex)) {
    console.log(match);
}
