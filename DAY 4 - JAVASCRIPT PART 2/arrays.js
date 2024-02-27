//introduction to arrays
let characters = ['pippin', 'goku', 'layla', 'morgana', 'aang'];

//accessing array elements
console.log('Character 2',characters[1]);
console.log('Character 5',characters[4]);
console.log('The last character:', characters[characters.length-1])

//modifying array elements
characters.push('sasuke');
console.log('The last character:', characters[characters.length-1])

//remove element
characters.pop();
console.log('The last character:', characters[characters.length-1])

//changing a value in an array
characters[0]='crybaby';
console.log('modified array:', characters)

//iterating over an array
for(let i = 0; i< characters.length; i++){
    console.log('Character', i+1, characters[i])

}
//methods
characters.forEach(function(character){
    console.log(character)
}
)
    
//indexOf
console.log(characters.indexOf('layla'));

//includes, returns boolean
console.log('Includes:', characters.includes('sasuke'))

//join, in this example it is an array of strings to one string
console.log('Joined Array:', characters.join('-'))

//slice -creates a new array
let slicedArray = characters.slice(1,4);
console.log('sliced array', slicedArray);

//splice removes elements
let removedElements = characters.splice(0, 2)
console.log('removed elemens:', removedElements)
console.log('remaining elemens:', characters)

