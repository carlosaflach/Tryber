const sum = require('./sum');

describe('test return of function sum', () => {
  it("test if the return of  sum(4,5) is 9", () => {
    expect(sum(4,5)).toBe(9);
  });
  it("test if the rerunt of sum(0,0) is 0", () => {
    expect(sum(0,0)).toBe(0);
  });
  it("test if sum throws an error when 4 and '5' are parameters", () => {
    expect(() => {
      sum(4,'5');
    }).toThrow();
  })


  it("test if the function throws an error if 4 and '5' are sum parameters", () => {
    expect(() => {
      sum(4,'5');
    }).toThrow(/parameters must be numbers/);
  })
});
