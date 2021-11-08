// describe(name, fn) cria um bloco que agrupa vários testes relacionados. Por exemplo, se você tiver um objeto myBeverage que deve ser delicioso, mas não azedo, você pode testá-lo com:


const myBeverage = {
  delicious: true,
  sour: false,
};

describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});