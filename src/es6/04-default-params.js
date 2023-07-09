function newUser (name,age,country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name,age,country);
}

newUser();
newUser('Ricardo',23,'CO');

// es6

function newUser2 (name = 'david',age = 38,country = 'AR'){
    console.log(name,age,country);
}

newUser2();
newUser2('Fransisco',80,'ES');