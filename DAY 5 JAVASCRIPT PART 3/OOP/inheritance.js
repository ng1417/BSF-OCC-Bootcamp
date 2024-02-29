//inheritance

//parent class
class Animal{
    constructor(name) {
        this.name = name;
    }
    eat(){
        console.log(`${this.name} is eating.`);
    }
}

//child class
class Dog extends Animal {
    bark(){
        console.log("woof woof!")
    }
}

//child class
class Cat extends Animal {
    meow(){
        console.log("meow")
    }
}

const myDog = new Dog("Bingo");

myDog.bark();

const myCat= new Cat("Kitty");

myCat.eat();