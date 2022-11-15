class Calculadora:
    def soma(self, x, y):
        return x + y


class CalculadoraDecoradaEnglish:
    def __init__(self, calculadora):
        self.calculadora = calculadora

    def converterNumero(self, numero):
        if not isinstance(numero, str):
            return numero

        # Neste cenário, em vez de fazermos IF e else... podemos usar o dicionário
        # conseguimos acessar obter o valor a partir da chave
        return {
            "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
            "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10,
        }.get(numero)

    def soma(self, x, y):
        return self.calculadora.soma(
            self.converterNumero(x), self.converterNumero(y)
        )


if __name__ == "__main__":
    calculadora = Calculadora()
    print("10 + 20 =")
    print(calculadora.soma(10, 20))

    calculadoraDecorada = CalculadoraDecoradaEnglish(calculadora)
    print("'oito' + 'dois' =", calculadoraDecorada.soma("eight", "two"))
    print("'oito' + 'dois' =", calculadoraDecorada.soma(8, 2))