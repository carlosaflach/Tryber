class Geladeira:
    def __init__(self, cor, potencia, voltagem, preco) -> None:
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.preco = preco
        self.__ligado = False

    def cor(self):
        return self.__cor

      