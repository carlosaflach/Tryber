const myRemove = require('./myRemove');

describe("Test myRemove function", () => {
  it('Test if myRemove([1, 2, 3, 4], 3), return [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Test if myRemove([1, 2, 3, 4], 3) do not return return [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Test if the array passed as parameter dont modify its value.', () => {
    const myList = [5, 6, 7, 8];
    myRemove(myList, 5)
    expect(myList).toEqual([5, 6, 7, 8]);
  });
  it('Test if myRemove([1, 2, 3, 4], 5) returns [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});