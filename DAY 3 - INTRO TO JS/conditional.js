//conditional

//ifs
let age = 17;

if(age >= 18){
console.log('You can vote!')
} else {
    console.log("you are not old enough to vote.")
}

//if else if-else
let temperature = 19;
if(temperature<0){
    console.log("It is freezing!")
} else if (temperature >=0 && temperature < 20) {
    console.log("It's cold outside")
} else {
    console.log("It is a warm day.")
}

//switch statements
let day = 'Monday';

switch(day){
    case'Monday':
        console.log("It is the start of the week");
    break;
        case'Friday':
        console.log("It is the end of the week");
    break;
    default:
        console.log("It is an ordinary day");
        break;
}