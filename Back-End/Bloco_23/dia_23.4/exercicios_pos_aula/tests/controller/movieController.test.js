const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

         /*
        Perceba que nosso stub também simula os comportamentos do `service`,
        dessa forma, conseguimos testar o comportamento do controller de
        maneira isolada.

        Aqui, todos os testes que requisitarem o serviço, devem receber
        retorno `false`.
      */

      sinon.stub(MoviesService, 'create').resolves(false);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });

  });

  describe('quando é inserido com sucesso', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

        /*
        Aqui, todos os testes que requisitarem o serviço, devem receber
        retorno `true`.
      */
        sinon.stub(MoviesService, 'create')
        .resolves(true);
    });

     // Restauraremos a função `create` original após os testes.
     after(() => {
      MoviesService.create.restore();
    });
    

    it('é chamado o status com o código 201', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });

  });
});

describe('Ao chamar o controller findById', () => {
  describe('Quando o id não existe', () => {
    const response = {};
    const request = {};
    
    before(() => {
      request.params = {};
      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();
    });
    
    it('É chamado com código 404 - Not Found', async () => {
      await MoviesController.findById(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
      expect(response.calledWith("Filme não encontrado.")).to.be.equal(true);
    });
  });

  describe('Quando o id existe', () => {

    const response = {};
    const request = {};
    
    before(() => {
      request.params = {};
      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();
    });

    it('É chamado com código 200 - OK', () => {
      await MoviesController.findById(request, response);
      expect(response.calledWith(200)).to.be.equal(true);
    });

    it('Retorna o objeto movies daquele id', () => {
      await MoviesController.findById(request, response);
      expect(response).to.be;
    });
  });
});