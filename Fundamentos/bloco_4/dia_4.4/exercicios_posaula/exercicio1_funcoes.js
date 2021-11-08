function verificaPalindrome(word){ // arara
    for(let index in word){
      if(word[index] != word[(word.length - 1) - index]){
        return false;
      }
    }
    return true;
  }
console.log(verificaPalindrome('arara')); 
console.log(verificaPalindrome('desenvolvimento'));