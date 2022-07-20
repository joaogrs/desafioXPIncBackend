/* eslint-disable no-unused-expressions */
const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../db/investimentManager');
const clientesModel = require('../../models/clientes.model');

describe('Atualiza o saldo do cliente', () => {
  const codCliente = 1;
  const valor = 150;

  describe('Quando não existe o cleinte cadastrado', () => {
    let executeSpy;

    beforeEach(() => {
      executeSpy = sinon.stub(connection, 'execute').resolves([[{ affectedRows: 0 }]]);
    });

    afterEach(() => {
      connection.execute.restore();
    });

    it('retornar `affectedRows` igual a 0', async () => {
      const [resultado] = await clientesModel.updateSaldoModel(codCliente, valor);
      expect(resultado).to.be.an('array');
      expect(resultado).to.not.be.empty;
      expect(resultado[0]).to.be.an('object');
      expect(resultado[0]).to.has.key('affectedRows');
      expect(resultado[0].affectedRows).to.be.equal(0);
    });

    it('verifica se está executando uma Query `UPDATE`', async () => {
      await clientesModel.updateSaldoModel(codCliente, valor);
      expect(executeSpy.callCount).to.be.equal(1, 1);
      expect(executeSpy.getCalls()[0].firstArg).to.contain('UPDATE');
    });
  });

  describe('quando existe o cliente está cadastrado', () => {
    let executeSpy;

    beforeEach(() => {
      executeSpy = sinon.stub(connection, 'execute').resolves([[{ affectedRows: 1 }]]);
    });

    afterEach(() => {
      connection.execute.restore();
    });

    it('retornar `affectedRows` igual a 1"', async () => {
      const [resultado] = await clientesModel.updateSaldoModel(codCliente, valor);
      expect(resultado).to.be.an('array');
      expect(resultado).to.not.be.empty;
      expect(resultado[0]).to.be.an('object');
      expect(resultado[0]).to.has.key('affectedRows');
      expect(resultado[0].affectedRows).to.be.equal(1);
      expect(executeSpy.callCount).to.be.equal(1);
    });

    it('verifica se está executando uma Query `UPDATE`', async () => {
      await clientesModel.updateSaldoModel(codCliente, valor);
      expect(executeSpy.callCount).to.be.equal(1);
      expect(executeSpy.getCalls()[0].firstArg).to.contain('UPDATE');
    });
  });
});

describe('Busca um cliente pelo código', () => {
  const codCliente = 1;
  describe('Quando não existe o cliente com o codigo inserido', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([[]]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Retorna um array', async () => {
      const [resultado] = await clientesModel.getClienteByCod(codCliente);
      expect(resultado).to.be.an('array');
    });

    it('O array está vazio', async () => {
      const [resultado] = await clientesModel.getClienteByCod(codCliente);
      expect(resultado).to.be.empty;
    });
  });

  describe('Quando a busca é realizada com sucesso', async () => {
    const cliente = {
      codCliente: 1,
      saldo: 150,
    };

    before(() => {
      sinon.stub(connection, 'execute').resolves([[cliente]]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna um array', async () => {
      const [resultado] = await clientesModel.getClienteByCod(codCliente);
      expect(resultado).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const [resultado] = await clientesModel.getClienteByCod(codCliente);
      expect(resultado).to.not.be.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [resultado] = await clientesModel.getClienteByCod(codCliente);
      expect(resultado[0]).to.be.an('object');
    });

    it('tais itens possui as propriedades:"codCleinte" e "saldo"', async () => {
      const [resultado] = await clientesModel.getClienteByCod(codCliente);
      expect(resultado[0]).to.include.all.keys('codCliente', 'saldo');
    });
  });
});

describe('Busca um cliente pelo usuário e senha', () => {
  const username = 'joão';
  const password = 'senha123';
  describe('Quando não existe um cliente com os dados inseridos', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([[]]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Retorna um array', async () => {
      const [resultado] = await clientesModel.getClienteByUserAndPassword(username, password);
      expect(resultado).to.be.an('array');
    });

    it('O array está vazio', async () => {
      const [resultado] = await clientesModel.getClienteByUserAndPassword(username, password);
      expect(resultado).to.be.empty;
    });
  });

  describe('Quando a busca é realizada com sucesso', async () => {
    const cliente = {
      codCliente: 1,
      saldo: 150,
      username: 'joão',
      password: 'senha123',
    };

    before(() => {
      sinon.stub(connection, 'execute').resolves([[cliente]]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna um array', async () => {
      const [resultado] = await clientesModel.getClienteByUserAndPassword(username, password);
      expect(resultado).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const [resultado] = await clientesModel.getClienteByUserAndPassword(username, password);
      expect(resultado).to.not.be.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [resultado] = await clientesModel.getClienteByUserAndPassword(username, password);
      expect(resultado[0]).to.be.an('object');
    });

    it('tais itens possui as propriedades:"codCliente", "saldo", "username" e "password"', async () => {
      const [resultado] = await clientesModel.getClienteByUserAndPassword(username, password);
      expect(resultado[0]).to.include.all.keys('codCliente', 'saldo', 'username', 'password');
    });
  });
});
