let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 1, 27];
let smallestNumber= numbers[0];
for(let numeros of numbers) {
    if(numeros < smallestNumber){
        smallestNumber = numeros;
    }
}
console.log(smallestNumber);