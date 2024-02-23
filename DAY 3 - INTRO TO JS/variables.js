//variables
//var is global scope
//use let by default

if(true){
    var myName ="Nicole";
    myName="Ms. Nicole"
    console.log(myName);
}
console.log(myName);

//let only visible inside scope of where it was declared
let age = 18;
console.log(age);

if(true){
    let animal="Cat";
    animal="elephant"
    console.log(animal);
}

//constant variable
const birthdate="01/01/1990"
console.log(birthdate);
//birthdate="tom" cannot change value of const

