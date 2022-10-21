def find_biggest_name(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return print(biggest_name)


find_biggest_name(['carlos', 'natasha', 'emeli', 'dan'])