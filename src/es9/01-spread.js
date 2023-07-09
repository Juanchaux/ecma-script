const user = { name: 'John', age: 30 , country: 'USA' };
const { name, ...rest } = user;
console.log(rest);
console.log(name);