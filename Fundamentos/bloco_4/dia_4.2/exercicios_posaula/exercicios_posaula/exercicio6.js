let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let  impares  = 0;

for(numeros of numbers) {
    if(numeros % 2 !==0){
        impares += 1;
    } 
}

if (impares === 0) {
    console.log('Nenhum valor impar encontrado');
}
else {
    console.log(impares);
}