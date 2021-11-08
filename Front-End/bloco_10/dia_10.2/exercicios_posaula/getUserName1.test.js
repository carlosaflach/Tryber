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
  it('Return the name of users', () => {
    expect.assertions(1);
    return getUserName(1).then((name) => {
      expect(name).toBe('Mark');
    });
  });
  it('Return the name of users', () => {
    expect.assertions(1);
    return getUserName(2).then((name) => {
      expect(name).toBe('Paul');
    });
  });
 
});

describe('In case that test dont find an user', () => {
  it('Should fail if users dont have the id', () => {
    expect.assertions(1);
    getUserName(4).catch((error) => {
      expect(error.message).toMatch(`User with 4 not found.`);
    })
  });
});