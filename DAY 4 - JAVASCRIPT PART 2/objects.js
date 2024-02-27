//objects

const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    hobbies: ['reading', 'coding', 'hiking'],

     greet: function(){
        console.log('Hello, my name is', this.firstName)
     }
}

//console.log(person.firstName);
//console.log(person.age);
person.greet();

person.lastName = 'Smith';
console.log(person.lastName);

//add new property
person.nationality = 'American';
console.log(person.nationality);

//add new method to object
person.introduce = function(){
    console.log(`I am ${this.firstName} ${this.lastName}, I am ${this.age} years old.`)
}
person.introduce();

//there can be nested objects
const address = {
    street: '123 Main St',
    city: 'San Francisco',
    country: 'USA'
}

person.homeAddress = address;

console.log(person.homeAddress.street)

//object destructuring
//extracting the properties of a certain object
const  {firstName, lastName, age} = person;
console.log(firstName, lastName)