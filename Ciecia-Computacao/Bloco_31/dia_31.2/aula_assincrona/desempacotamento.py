a, b = "cd"
print(a)  # saída: c
print(b)  # saída: d

x, y, z = (1, 2, 3)
print(x)
print(y)
print(z)

head, *tail = (1, 2, 3) # Quando um * está presente no desempacotamento, os valores são desempacotados em formato de lista.
print(head)  # saída: 1
print(tail)  # saída: [2, 3]