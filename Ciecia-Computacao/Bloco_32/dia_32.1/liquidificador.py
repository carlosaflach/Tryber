class Liquidificador:
    def __init__(self, cor, potencia, voltagem, preco):
        # Encapsulamento, onde podem ter atributiso privados e publicos
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__amperagem_atual_no_motor = 0

    # Getter
    @property
    def cor(self):
        return self.__cor

    # Setter
    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor

    def ligar(self, velocidade):
        self.__velocidade = velocidade
        self.__amperagem_atual_no_motor = (
            (self.__potencia / self.__voltagem) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado


liquidificador_azul = Liquidificador("Azul", 110, 127, 200)
liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 100)


# Abstração onde o usuário não precisa saber o que aconteceu,
# somente chmar o método.
if __name__ == '__main__':
    liquidificador_vermelho.ligar(1)
    print("Esta ligado?", liquidificador_vermelho.esta_ligado())

    liquidificador_vermelho.desligar()
    print("Esta ligado?", liquidificador_vermelho.esta_ligado())
    # Esta ligado? False

    print(f"A cor atual é {liquidificador_azul.cor}")
    liquidificador_azul.cor = "Vermelho"
    print(f"Após pintarmos, a nova cor é {liquidificador_azul.cor}")

    # print(f"A cor atual é {liquidificador_azul.__cor}")
    # AttributeError: 'Liquidificador' object has no attribute '__cor'