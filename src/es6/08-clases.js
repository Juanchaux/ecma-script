//declaracion

class User {};

// instancia

// const newUser = new user();

class user {
    // metodo
    greeting(){
        return 'Hello';
    }
}

const jcxg = new user();
console.log(jcxg.greeting());


// constructor

class user1 {
    constructor() {
        console.log('Nuevo Usuario')
    }
    greeting(){
        return 'Hello';
    }
}

const david = new user1();

// This 

class user2 {
    constructor(name){
        this.name = name;
    }
    //metodos
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} my name is ${this.name}`
    }
}

const ana = new user2('Ana');
console.log(ana.greeting());

// set y get

class user3 {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} my name is ${this.name}`
    }
    get Uage(){
        return this.age;
    }
    set Uage(n){
        this.age = n;
    }
}

const bebeloper = new user3('juan', 20);
console.log(bebeloper.Uage);
console.log(bebeloper.Uage = 25);
console.log(bebeloper.greeting());