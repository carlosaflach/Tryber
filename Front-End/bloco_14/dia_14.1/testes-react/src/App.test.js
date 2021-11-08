import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('Verificando se existe o campo Email.', () => {
  // acessar os elementos da tela
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');

  // fazer os testes
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

// test('Verificando se existe um botão', () => {
//   const { getByRole } = render(<App />);
//   const btn = getByRole('button');
//   expect(btn).toBeInTheDocument();
// });

test('Verificando se existem dois botões', () => {
  // acessar os elementos da tela
  render(<App />);
  const buttons = screen.getAllByRole('button');

  // fazer os testes.
  expect(buttons).toHaveLength(2);
});

test('Verificando se existe um botão de enviar', () => {
  // acessar os elementos da tela
  render(<App />);
  const btnSend = screen.getByTestId('id-send');

  // fazer os testes
  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveProperty('type', 'button');
  expect(btnSend).toHaveValue('Enviar');
});


test('Verificando se o botão e o campo email estão funcionando.', () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});