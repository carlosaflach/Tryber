const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);

      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject(new Error('Não possui esse tipo de animal.'));
    }, 100);
  })
);

test('Testando com async/await', async () => {
  const listDogs = await findAnimalsByType('Dog');
  expect(listDogs[0].name).toEqual('Dorminhoco');
  expect(listDogs[1].name).toEqual('Soneca');
});


// Teste para o caso de falha. Nesse caso caso a promise não lançar o erro cercado do try/ catch, o catch não será executado, logo um falso positivo.

// test('Testando com async/await, testando o reject', async () => {
//   try {
//     await findAnimalsByType('Lion');
//   } catch (error) {
//     expect(error).toEqual(new Error('Não possui esse tipo de animal.'));
//   }
// });

// Para resolver o problema acima podemos usar o expect.assertions();
test('Testando com async/await, testando o reject', async () => {
  expect.assertions(1);
  try {
    await findAnimalsByType('Lion');
  } catch (error) {
    expect(error).toEqual(new Error('Não possui esse tipo de animal.'));
  }
});

// Ou ainda  combinar o async/ await com o resolves e rejects.

describe('Testando Async/Await - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', async () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ];
      await expect(findAnimalsByType('Dog')).resolves.toEqual(listDogs);
    });
  });

  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      await expect(findAnimalsByType('Lion')).rejects
        .toEqual(new Error('Não possui esse tipo de animal.'));
    });
  });
});