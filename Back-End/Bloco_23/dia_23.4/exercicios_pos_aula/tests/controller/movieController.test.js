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
  describe('Quando o não existem filmes no banco de dados', () => {
    const response = {};
    const request = {};
    
    before(() => {
      request.params = { id: 1 };

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();
      
      sinon.stub(MoviesService,'findById').resolves(null);
    });

    after(() => {
      MoviesService.findById.restore();
    })

    it('é chamado o método "status" passando 404', async () => {
      await MoviesController.findById(request, response);

      expect(response.status.calledWith(404)).to.be.equal(true);
    });
    
    it('é chamado o método "send" passando a mensagem "Not Found"', async () => {
      await MoviesController.findById(request, response);

      expect(response.send.calledWith('Not Found')).to.be.equal(true);
    });
  });

  describe('Quando o id existe', () => {
    const movie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    }

    const response = {};
    const request = {};
    
    before(() => {
      request.params = { id: 1 };
      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(MoviesService,'findById').resolves(movie);
    });

    after(() => {
      MoviesService.findById.restore();
    });

    it('É chamado com código 200 - OK', async () => {
      await MoviesController.findById(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "send" passando um objeto', async () => {
      await MoviesController.findById(request, response);

      expect(response.send.calledWith(sinon.match.object)).to.be.equal(true);
    });

  });
});