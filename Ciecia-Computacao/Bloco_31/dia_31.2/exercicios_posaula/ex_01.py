# nome = input("Insira um nome: ")

# char = ''

# for string in nome:
#     char += string
#     print(char)

# print(len("Carlos"))
# for index in range(6):
#     print(index)

def vertical_inverted_ladder(word):
    for removed_letters in range(len(word)):
        # print(removed_letters)
        for index in range(len(word) - removed_letters):
            print(word[index], end="")
        print()

if __name__ == "__main__":
    name = input("Digite um nome: ")
    vertical_inverted_ladder(name)