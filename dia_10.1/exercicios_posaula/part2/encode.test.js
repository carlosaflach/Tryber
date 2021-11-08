const { encode, decode } = require('./encode');

describe('Test function encode/decode', ()=> {
  it('Test if encode is function', () => {
    expect(typeof encode).toBe('function');
  });
  it('Test if decode is function', () => {
    expect(typeof decode).toBe('function');
  });
});

describe('Test the cases of function encode', () => {
  it('Test if the vowel a is converted to 1', () => {
    expect(encode('ana')).toEqual('1n1');
  });
  it('Test if the vowel e is converted to 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });
  it('Test if the vowel i is converted to 3', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });
  it('Test if the vowel o is converted to 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });
  it('Test if the vowel u is converted to 5', () => {
    expect(encode('nu')).toEqual('n5');
  });
  it('Test if the number of characters is the same', () => {
    expect(encode('Trybe').length).toBe(5);
  });
});

describe('Test the cases of function decode', () => {
  it('Test if the number 1 is converted to vowel a', () => {
    expect(decode('1n1')).toEqual('ana');
  });
  it('Test if the number 2 is converted to vowel e', () => {
    expect(decode('2l2')).toEqual('ele');
  });
  it('Test if the number 3 is converted to vowel i', () => {
    expect(decode('x3x3')).toEqual('xixi');
  });
  it('Test if the number 4 is converted to vowel o', () => {
    expect(decode('4v4')).toEqual('ovo');
  });
  it('Test if the number 5 is converted to vowel u', () => {
    expect(decode('n5')).toEqual('nu');
  });
  it('Test if the number of characters is the same', () => {
    expect(decode('Trybe').length).toBe(5);
  });
});