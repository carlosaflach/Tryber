# Parâmetro Rest
> O parâmetro rest, assim como o Spread Operator é outra feature do ES6 que permite que você crie funções que recebam um número variável de argumentos.

## Função:
>Adicionar um número variável de argumentos no parâmetro de uma função.
### Exemplo 1:
```javascript
function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.
```
> Observe que no segundo <console.log> foi passado diferentes tipos de elementos, e todos foram empacotados em um array, passado para o parâmetro da função.

### Exemplo 2:
``` javascript
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88
```
## Principais diferenças entre o Spread Operator e Parâmentro Rest:

1. O **Spread Operator** esparrama um objeto interável, o **Parâmetro Rest** empacota uma lista variável.
   
2. Geralmente o **Spread Operator** é usado para passar os elementos de um objeto interável como parâmetro para uma função. Dessa forma ele esparrama os elementos nos respectivos parâmetros, caso o número de elementos seja igual ao número de parâmetros. Já o **Parâmetro Rest** ele é usado para empacotar uma lista variável de elementos e passar tudo isso como um array ou objeto como parâmetro para uma função.
   ```javascript
   // Spread Operator:
   const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
   const patientInfo = [60, 1.7];
   console.log(imc(...patientInfo)); // 20.76

   //Parâmetro Rest:
   function quantosParams(...args) {
    console.log('parâmetros:', args);
      return `Você passou ${args.length} parâmetros para a função.`;
    }
    console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
    console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.
   

