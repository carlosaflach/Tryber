const { expect } = require('chai');
const verifyNumberSignal = require('../exercise1')

describe('Verify if the function works', () => {
    describe("When it's a number", () => {
      it('Verify if the number is positve', () => {
          const number = 3;
          const response = verifyNumberSignal(number);

          expect(response).to.be.equal("It's positive!");
          expect(number).to.be.a('number');
      });

      it('Verify if the number is negative', () => {
        const number = -1;
        const response = verifyNumberSignal(number);
        expect(response).to.be.equal("It's negative!");
      })
    })

    describe("When it's not a number", () => {
      it("Verify if is a number", () => {
        const number = 'a';
        const response = verifyNumberSignal(number);

        expect(response).to.be.equal("The insert value it's not a number. Please insert a number.");
        expect(number).not.to.be.a('number');
      });
    })
});