//arrow functions

const greet = (name) =>{
    console.log(name);
}
greet("ron")

const square = (a) => a*a;
    console.log(square(4));

//Spread and Rest operators ...treatedAsArray
function restOperator(first, ...restOfArgs){
    console.log(first);
    console.log(restOfArgs);
}

restOperator('one','two', 'three', 'four', 'five');

//spread operator - ...pass an array in place of the argument and it speads them into separate arguments
//it will only take the args matching the number of args, it will ignore the rest
function sum(x, y, z){
    return x+y+z;
}

const numbers=[1, 2, 3, 4]
console.log(sum(...numbers))

//common built-in methods

//Array
//filter
let nums = [1,2,3,4,5,6,7,8,9,10]
const even = nums.filter((num) => num % 2 ==0);
const odd = nums.filter((num) => num % 2 !=0);
console.log(even);
console.log(odd);

//String
//Split
const message = 'Hello, world!';
const words = message.split(', ');
console.log(words);

//includes - case sensitive
const sentence = "The quick brown fox jumps over the lazy dog";
const containsWord = sentence.includes('fox');
console.log(containsWord);

//length - a property, not a method
console.log(sentence.length);

// to lowercase and to uppercase
let string = "HELLO world";
console.log(string.toLowerCase());
console.log(string.toUpperCase());

//trim
let str2 = "   I love JavaScript   "
console.log(str2.trim());

//math
//max and min
const maxNumber = Math.max(10, 5, 20, 21);
console.log(maxNumber);
const minNumber = Math.min(10, 5, 20, 21);
console.log(minNumber);

//round;
console.log(Math.round(3.6));

//floor - always rounds down
console.log(Math.floor(3.6));

//ceiling - always rounds up
console.log(Math.ceil(3.1));

//random method empty() gives number between 0-1
console.log(Math.random());
console.log(Math.random()*10);

//nested math methods
console.log(Math.floor(Math.random()*100));

//other methods
//to fixed - fixing decimal to set length - will round
const price = 40.2345.toFixed(2);
console.log(price);

//date
const currentDate = new Date();
console.log(currentDate);
const christmas = new Date(2024, 11, 25);
console.log(christmas);