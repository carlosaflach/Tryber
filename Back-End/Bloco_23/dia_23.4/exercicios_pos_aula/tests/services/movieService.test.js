const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');

const MoviesService = require('../../services/movieService');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

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
      const response = await MoviesService.findById();

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
      const response = await MoviesService.findById(1);

      expect(response).to.be.an('object');
    });

    it('o objeto não está vazio', async () => {
      const response = await MoviesService.findById(1);

      expect(response).to.be.not.empty;
    });

    it('tal objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const item = await MoviesService.findById(1);

      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
    });
  });
});