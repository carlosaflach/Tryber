const longestWord = (palavra) => {
  let armazenaPalavras = [];
  let maxLength = 0 ;
  let result = '';
  armazenaPalavras = palavra.split(' ');
  for(let i = 0; i < armazenaPalavras.length; i += 1) {
     if (armazenaPalavras[i].length > maxLength) {
       maxLength = armazenaPalavras[i].length;
       result = armazenaPalavras[i];
     }
  }
  return result;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'