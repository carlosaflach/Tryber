const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Testa se a palavra trybe se transforma em TRYBE', (done) => {
  uppercase('trybe', (callback) => {
    try {
      expect(callback).toBe('TRYBE');
      done();
    } catch (error) {
      done(error);
    }
  });
});