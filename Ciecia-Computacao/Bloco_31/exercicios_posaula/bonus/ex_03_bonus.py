def sum_total(n):
    numbers = list(range(1, n+1))
    print(numbers)
    total = 0
    for number in numbers:
        total += number
    return print(total)


sum_total(10)