function* iterate(array) {
  for (let value of array){
       yield value;
  }
}

const it = iterate(['a', 'b', 'c']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);