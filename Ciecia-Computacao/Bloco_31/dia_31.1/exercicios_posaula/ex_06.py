def check_triangle(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3 and
        side2 + side3 > side1 and
        side1 + side3 > side2
    )
    if not is_triangle:
        return print("não é triangulo")
    elif side1 == side2 == side3:
        return print('Equilátero')
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return print("Isósceles")
    else:
        return print('Escaleno')


check_triangle(2, 5, 5)
check_triangle(2, 2, 2)
check_triangle(4, 8, 10)