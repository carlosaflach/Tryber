

function indiceDoMaior (array) {
    let indiceMaior = 0;
    for(let indice in array) {
        if (array[indiceMaior] < array[indice]){
            indiceMaior = indice;
        }
    }
return indiceMaior;
}
console.log (indiceDoMaior([2, 3, 6, 7, 10, 1]));