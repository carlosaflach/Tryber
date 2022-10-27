import json
# outra  forma é usando o load

# loads carrega o JSON a partir de um texto e o load carrega o json a partir de um arquivo

with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

print(pokemons[0])  # imprime o primeiro pokemon da lista

# Separamos somente os do tipo grama
grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

# Abre o arquivo para escrevermos apenas o pokemons do tipo grama
with open("grass_pokemons.json", "w") as file:
    json_to_write = json.dumps(
        grass_type_pokemons
    )  # conversão de Python para o formato json (str)
    file.write(json_to_write)


# leitura de todos os pokemons
with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

# separamos somente os do tipo grama
grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]


# abre o arquivo para escrita
with open("grass_pokemons.json", "w") as file:
    # escreve no arquivo já transformando em formato json a estrutura
    json.dump(grass_type_pokemons, file)