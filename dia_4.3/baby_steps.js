// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16".



// Interpretação do problema:
// 1. Devemos usar o array fruits.
// 2. o termo 'percorra' indica uma estrutura de repetição, ou loop.
// 3. "somando todos os valores", indica que temos que ter uma variável que guarda o valor da soma dos valores.
// 4. O termo "caso" indica uma estrutura condicional ou, if.
// 5. O termo  'imprima' indica um console.log.


// baby steps

/*
Adicionar o array;
Criar uma variável com valor 0;
Criar um loop que percorre o array;
Incrementar a variável com o valor correspondente a cada loop;
Criar um if com a condição da variável ser maior que 15;
Caso a variável obedeça a condição;
Imprimir a variável
Caso não obedeça a condição;
Imprimir a mensagem "valor menor que 16";
*/

//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
  sum += fruits[index];
}

if (sum > 15) {
  console.log(sum);
} else {
  console.log('valor menor que 16');
}