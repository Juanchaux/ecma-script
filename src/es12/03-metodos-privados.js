class user3 {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //metodos
    #speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} my name is ${this.name}`
    }
    get #Uage(){
        return this.age;
    }
    set #Uage(n){
        this.age = n;
    }
}

const bebeloper = new user3('juan', 20);
console.log(bebeloper.Uage);
console.log(bebeloper.Uage = 25);
console.log(bebeloper.greeting());