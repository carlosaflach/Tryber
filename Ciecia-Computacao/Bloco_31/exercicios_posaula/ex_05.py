import math
# 1 litro de tinta  -  3 metros
# 1 lata de tinta - 18 litros - custa 80 reais


def paint_costs_(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    print(required_liters % 18, required_cans)
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price


print(paint_costs_(117))


def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = math.ceil(required_liters / 18)
    return required_cans, required_cans * can_price


print(paint_costs(120))