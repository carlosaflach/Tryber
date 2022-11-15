class Calculadora:
    def soma(self, x, y):
        return x + y


class CalculadoraDecorada:
    def __init__(self, calculadora):
        self.calculadora = calculadora

    def converterNumero(self, numero):
        if not isinstance(numero, str):
            return numero

        # Neste cenário, em vez de fazermos IF e else... podemos usar o dicionário
        # conseguimos acessar obter o valor a partir da chave
        return {
            "um": 1, "dois": 2, "três": 3, "quatro": 4, "cinco": 5,
            "seis": 6, "sete": 7, "oito": 8, "nove": 9, "dez": 10,
        }.get(numero)

    def soma(self, x, y):
        return self.calculadora.soma(
            self.converterNumero(x), self.converterNumero(y)
        )


if __name__ == "__main__":
    calculadora = Calculadora()
    print("10 + 20 =")
    print(calculadora.soma(10, 20))

    calculadoraDecorada = CalculadoraDecorada(calculadora)
    print("'oito' + 'dois' =", calculadoraDecorada.soma("oito", "dois"))
    print("'oito' + 'dois' =", calculadoraDecorada.soma(8, 2))