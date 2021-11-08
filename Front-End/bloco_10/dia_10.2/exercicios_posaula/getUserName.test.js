const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);


describe('In case that test find some user', () => {
  it('Return the name of users', async () => {
    expect.assertions(1);
    await expect(getUserName(1)).resolves.toBe('Mark');
  });
  it('Return the name of users', async () => {
    expect.assertions(1);
    await expect(getUserName(2)).resolves.toBe('Paul');
  });
});

describe('In case that test dont find an user', () => {
  it('Should fail if users dont have the id', async () => {
    expect.assertions(1);
    await expect(getUserName(4)).rejects.toEqual(new Error(`User with 4 not found.`));
  });
});