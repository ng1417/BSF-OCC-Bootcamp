//loops - loops ae used to repeatedly execute a block of code until a specific condition is met
//they provide a way to automate code

//for loop
for(let i = 1; i<5; i++){
console.log('for loop', i)
}

//while loop
let count = 1;
while (count <=3){
    console.log('While Loop!', count)
    count++
    console.log('While Loop!', count)
}

//do-while loop - will always run at least once
let counter = 10;
do {
 console.log('Do while count:', counter)
 counter++
}while( counter <=5);