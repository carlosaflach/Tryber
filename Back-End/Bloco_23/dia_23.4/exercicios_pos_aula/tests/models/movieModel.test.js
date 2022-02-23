const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');


describe('Busca apenas um filme no BD por seu ID', () => {
  before(async () => {
    const execute = [[]];

    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  })

  describe('quando não existe um filme com o ID informado', () => {
    it('retorna null', async () => {
      const response = await MoviesModel.getById();
      expect(response).to.be.equal(null);
    });
  });

  describe('quando existe um filme com o ID informado', () => {

    before(() => {
      sinon.stub(MoviesModel, 'getById')
        .resolves(
          {
            id: 1,
            title: 'Example Movie',
            directedBy: 'Jane Dow',
            releaseYear: 1999,
          }
        );
    });

    after(() => {
      MoviesModel.getById.restore();
    })

    it('retorna um objeto', async () => {
      const response = await MoviesModel.getById(1);

      expect(response).to.be.an('object');
    });

    it('o objeto não está vazio', async () => {
      const response = await MoviesModel.getById(1);

      expect(response).to.be.not.empty;
    });

    it('tal objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const item = await MoviesModel.getById(1);

      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    });
  });
});