
const ex1func = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject(new Error("Informe apenas números"));

    const resultado = ((a + b) * c);

    if(resultado < 50) reject(new Error('Valor muito baixo'));

    resolve(console.log(resultado));
  });

  return promise;
}

ex1func(1, 10, 5);