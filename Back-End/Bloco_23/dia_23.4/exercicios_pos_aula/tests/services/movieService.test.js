const { expect } = require('chai');
const sinon = require('sinon');
const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

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

  before(() => {
    const ID_EXAMPLE = 1;
    sinon.stub(MoviesModel, 'create').resolves(ID_EXAMPLE);
  })

  // Restauramos a função create original
  after(() => {
    MoviesModel.create.restore();
  });

  describe('quando é inserido com sucesso', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

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


describe('Busca um filme pelo id', () => {
  describe('Quando não existe o filme no banco de dados', () => {
    it('Retorna null', async () => {
      const response = await MoviesService.findById();

      expect(response).to.be.equal(null);
    })
  });

  describe('Quando existe o filme no banco de dados', () => {
    it('Retorna um objeto', async () => {
      const response = await MoviesService.findById(1);
      
      expect(response).to.be.an('object');
    });

    it('O objeto não está vazio', () => {
      const response = await MoviesService.findById(1);

      expect(response).not.to.be.empty;
    });

    it('O objeto possui as propriedades: "id", "title", "directedBy", "releaseYear"', () => {
      const response = await MoviesService.findById(1);

      expect(response).to.include.all.keys('id', 'title', 'directedBy', 'releaseYear');
    });
  });
})