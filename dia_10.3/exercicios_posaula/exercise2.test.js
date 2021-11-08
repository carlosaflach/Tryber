const service = require('./exercise2');
jest.mock('./exercise2');

describe('Novas implementações', () => {
  test('mockando a função pare receber um parâmetro e retornar em caixa baixa', () => {
    const newF1 = service.fn1.mockImplementation( a => a.toLowerCase());
  
    expect(newF1('UPPERCASE')).toBe('uppercase');
    expect(newF1).toHaveBeenCalled();
    expect(newF1).toHaveBeenCalledTimes(1);
    expect(newF1).toHaveBeenCalledWith('UPPERCASE');
  });

  test('mockando a funçao deve retornar a ultima string',() => {
    const newF2 = service.fn2.mockImplementation((a) => {
      const l = a.length;
      return a[l-1];
    });
    expect(newF2('UPPERCASE')).toBe('E');
    expect(newF2).toHaveBeenCalled();
    expect(newF2).toHaveBeenCalledTimes(1);
    expect(newF2).toHaveBeenCalledWith('UPPERCASE');
  });

  test("mockando função que recebe 3 parâmetros e os concatena", () => {
    service.fn3.mockImplementation((a, b, c) => a.concat(b, c));

    expect(service.fn3("tr", "y", "be")).toBe("trybe");
    expect(service.fn3).toHaveBeenCalled();
    expect(service.fn3).toHaveBeenCalledTimes(1);
    expect(service.fn3).toHaveBeenCalledWith("tr", "y", "be");
  });

});

describe("testando implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    const first = jest
      .spyOn(service, "fn1")
      .mockImplementation(a => a.toLowerCase());

    expect(first("UPPERCASE")).toBe("uppercase");
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(2);
    expect(first).toHaveBeenCalledWith("UPPERCASE");

    service.fn1.mockRestore();

    expect(service.fn1("lowercase")).toBe("LOWERCASE");
  });
});