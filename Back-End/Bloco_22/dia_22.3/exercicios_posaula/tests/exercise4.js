const sinon = require('sinon');
const { expect } = require('chai');
const fs = require('fs');
const writeFile = require('../exercise4');

describe('Execute the function to write file', () => {
  before('Create a duble for not I/O the application',() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after('Reset the double method', () => {
    fs.writeFileSync.restore();
  });

  describe('Answer ', () => { 
    it("It's a string", () => {
        const response = writeFile('arquivo.txt', '#vqv conteúdo');

        expect(response).to.be.a('string');
    });

    it("It's equal to ok", () => {
      const response = writeFile('arquivo.txt', '#vqv conteúdo');

      expect(response).to.be.equal('ok');
    })
  })
});