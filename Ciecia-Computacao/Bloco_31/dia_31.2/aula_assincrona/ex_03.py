recuperacao = []
with open("people.txt", mode="r") as file:
    for line in file:
        # captura estudante por linha
        nota_estudante = line
        # print(nota_estudante)
        # quebra a linha no espaço e salva em um array
        nota_estudante = nota_estudante.split(' ')
        # print(nota_estudante)
        # verifica se a nota que está na posição 1 é menor que 6
        if int(nota_estudante[1]) < 6:
            # se for menor que 6 adiciona o estudante no array de recuperacao e adiciona quebra de linha
            recuperacao.append(nota_estudante[0] + "\n")


with open('estudantes_recuperacao.txt', mode="w") as recuperacaoFile:
    print(recuperacao)
    recuperacaoFile.writelines(recuperacao)


