from eletrodomestico import Eletrodomestico


class Microondas(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        super().__init__(cor, potencia, voltagem, preco)


microondas = Microondas("Branco", 450, 220, 400)

print(f"O microondas {microondas.cor} custa {microondas.preco}.")