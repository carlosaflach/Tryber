from eletrodomestico import Eletrodomestico


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.eletrodomesticos = []

    # Permitindo a aquisição de qualquer eletrodoméstico
    def comprar_eletrodomestico(self, eletrodomestico: Eletrodomestico):
        if eletrodomestico.preco >= self.saldo_na_conta:
            self.saldo_na_conta -= eletrodomestico.preco
            self.eletrodomestico.append(eletrodomestico)

    def __str__(self) -> str:
        if self.geladeira:
            return f"""
        nome: {self.nome}
        saldo: {self.saldo_na_conta}
        geladeira: {self.nome} possui uma geladeira
        """
        return f"{self.nome} não possui uma geladeira"


pessoa_cozinheira = Pessoa("Jacquin", 1000)

print(pessoa_cozinheira)
