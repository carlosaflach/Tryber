list_of_numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def check_min_number(list):
    smaller = list[0]
    for number in list:
        if number < smaller:
            smaller = number
    return print(smaller)


check_min_number(list_of_numbers)

# Dica: a função min já existe nativamente no Python! 
# Trabalhando em Python, sempre compensa pesquisar uma solução primeiro 
# porque este brinquedo vem com todos os acessórios inclusos!


def minimun(list):
    return print(min(list))


minimun(list_of_numbers)
