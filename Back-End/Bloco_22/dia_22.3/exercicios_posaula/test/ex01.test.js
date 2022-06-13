const { expect } = require('chai');
const checkNumber = require('../ex01');

describe('Testa função que checka se o número é positivo, neutro ou negativo', () => {
    describe('Quando o número é positivo', () => {
        it('Deve retornar positivo', () => {
          const number = checkNumber(5);

          expect(number).to.be.equals('positivo');
        });
    });
    describe('Quando o número é negativo', () => {
      it('Deve retornar negativo', () => {
        const number = checkNumber(-5);
        expect(number).to.be.equals('negativo');
      });
    });

    describe('Quando o número é neutro = 0', () => {
      it('Deve retornar neutro', ()=> {
        const number = checkNumber(0);
        expect(number).to.be.equals('neutro');
      });
    });
    
});