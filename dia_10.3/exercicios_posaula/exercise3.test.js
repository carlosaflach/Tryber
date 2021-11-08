const service = require('./exercise2');

describe("testando implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    const first = jest
      .spyOn(service, "fn1")
      .mockImplementation(a => a.toLowerCase());

    expect(first("UPPERCASE")).toBe("uppercase");
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith("UPPERCASE");

    service.fn1.mockRestore();

    expect(service.fn1("lowercase")).toBe("LOWERCASE");
  });
});