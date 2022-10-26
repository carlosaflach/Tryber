import liquidificador
import geladeira

liquidificador_vermelho = liquidificador.Liquidificador(
    "vermelho", 200, 220, 200
)


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None
        self.geladeira = None

    def comprar_liquidificador(
        self, liquidificador: liquidificador.Liquidificador
    ):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def comprar_geladeira(self, geladeira: geladeira.Geladeira):
        if geladeira.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= geladeira.preco
            self.geladeira = geladeira

    def __str__(self) -> str:
        if self.geladeira:
            return f"""
        nome: {self.nome}
        saldo: {self.saldo_na_conta}
        geladeira: {self.nome} possui uma geladeira
        """
        return f"{self.nome} não possui uma geladeira"


geladeira_branca = geladeira.Geladeira("branca", 250, 220, 100)
pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_geladeira(geladeira_branca)

pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)

print(pessoa_cozinheira)
