let custoDoProduto = 5;
let valorDeVenda = 20;

if(custoDoProduto >= 0 && valorDeVenda >= 0) {
    let custoTotalDoProduto = custoDoProduto * 1.2;
    let lucroTotal = (valorDeVenda - custoTotalDoProduto)* 1000;
    console.log (lucroTotal);
}
else {
    console.log ('Esse valor está errado pois é negativo.')
}
