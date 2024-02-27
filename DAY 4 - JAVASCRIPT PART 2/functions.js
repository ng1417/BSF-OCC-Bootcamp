//functions 

//declaring a function
function greet(){
    console.log('Hello Function World!')
    console.log('Hello to the world of functions!')

}

//calling a function
greet();


//function declaration - can be hoisted
function functionDeclaration(){
    console.log('Hello, I am a function declaration!')
}
functionDeclaration();

//function expression - cannot be hoisted - cannot call until initialized preferred
const functionExpression = function(){
    console.log('Hello, I am a function expression!')
};
functionExpression();

//Functions with parameter
function greatMe(name){
    console.log('Hello', name + '!')
};

//returning value from function
function sum(a, b){
 return a+b;
};
console.log('The sum of a and b is:', sum(1,2));