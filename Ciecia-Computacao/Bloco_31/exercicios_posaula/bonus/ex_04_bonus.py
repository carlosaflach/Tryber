def total_price(litros, tipo):
    price = 0
    if tipo == 'A':
        if litros <= 20:
            price = litros * 1.90 * (1 - (3/100))
            return price
        else:
            price = litros * 1.90 * (1 - (5/100))
            return price
    else:
        if litros <= 20:
            price = litros * 2.5 * (1 - (4/100))
            return price
        else:
            price = litros * 2.5 * (1 - (6/100))
            return price


print(total_price(20, 'A'))
print(total_price(50, 'A'))
print(total_price(20, 'G'))
print(total_price(50, 'G'))

def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total