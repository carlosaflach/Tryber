const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs').promises;

const escrevaArquivo = require('../ex04');

describe('Testa função que escreve em um arquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFile');
  });

  after(() => {
    fs.writeFile.restore();
  });

  describe('A resposta é uma string', () => {
    it('é uma "string"', async () => {
      const resposta = await escrevaArquivo('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', async () => {
      const resposta =  await escrevaArquivo('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.equals('ok');
    });
  });
});