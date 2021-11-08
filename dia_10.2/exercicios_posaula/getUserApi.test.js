const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

it('gets a list of repositories names', async () => {
  const url = 'https://api.github.com/orgs/tryber/repos';
  expect.assertions(2);
  await expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-todo-list');
  await expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-meme-generator');
});