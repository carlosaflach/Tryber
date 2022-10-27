from eletrodomestico import Eletrodomestico


class Liquidificador(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        # Encapsulamento, onde podem ter atributiso privados e publicos
        def __init__(self, cor, potencia, voltagem, preco):
            # chamando o método da classe mãe

            super().__init__(cor, potencia, voltagem, preco)


liquidificador_azul = Liquidificador("Azul", 110, 127, 200)
liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 100)


# Abstração onde o usuário não precisa saber o que aconteceu,
# somente chmar o método.
if __name__ == "__main__":
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
