import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Exemplo 1. - Aula.
it('Verifica que, quando recebo uma piada, mostro ela na tela', async () => {
  // global.fetch = (url) => {
  //   return Promise.resolve({
  //     json: () => Promise.resolve({  
  //     id: '7h3oGtr0fxc',
  //     joke: 'Whiteboards ... are remarkable.',
  //     status: 200, })
  //   })
  // }
// Os dois códigos são identicos, a diferença é que o no código abaixo, tem mais opções para utilização de teste.
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      id: '7h3oGtr0fxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,   
    })
  })
  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
});

// Exemplo 2 - Aula

// afterEach(() => jest.clearAllMocks());

// it('fetches a joke', async () => {
//   const joke = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };

//   jest.spyOn(global, 'fetch');
//   global.fetch.mockResolvedValue({
//     json: jest.fn().mockResolvedValue(joke),
//   });

//   render(<App />);
//   const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
//   expect(renderedJoke).toBeInTheDocument();
//   expect(global.fetch).toBeCalledTimes(1);
//   expect(global.fetch).toBeCalledWith(
//     'https://icanhazdadjoke.com/',
//     { headers: { Accept: 'application/json' } },
//   );
// });

// Exemplo 3 - Aula.

// afterEach(() => jest.clearAllMocks());

// it('fetches a joke', async () => {
//   const joke = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };

//   global.fetch = jest.fn(() => Promise.resolve({
//     json: () => Promise.resolve(joke),
//   }));

//   render(<App />);
//   const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
//   expect(renderedJoke).toBeInTheDocument();
//   expect(global.fetch).toBeCalledTimes(1);
//   expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
// });
