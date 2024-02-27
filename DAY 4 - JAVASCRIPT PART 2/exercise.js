//activity
num1=6;
num2 =7;
function checkEvenOrOdd(num){
    
    if(num%2 == 0){
        return "even"
    }else {return "odd"}
}

console.log(`the number ${num1} is`, checkEvenOrOdd(num1));
console.log(`the number ${num2} is`, checkEvenOrOdd(num2));