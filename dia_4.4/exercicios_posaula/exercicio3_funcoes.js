

function retornaMenorValor (numeros){
let menorIndice = 0;
    for(let index in numeros){
        if(numeros[menorIndice] > numeros[index]){
            menorIndice = index;
        }
    }
    return menorIndice;
}
console.log(retornaMenorValor([2, 4, 6, 7, 10, 0, -3]));
