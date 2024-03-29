const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../src/db/investimentManager');
const vendasModel = require('../../src/models/vendas.model');

describe('Insere uma nova venda no banco de dados', () => {
  describe('quando é inserido com sucesso', async () => {
    const payloadVenda = {
      codCliente: 1,
      codAtivo: 1,
      qtdeAtivo: 2,
    };

    before(async () => {
      const execute = [{ affectedRows: 1 }];

      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(async () => {
      connection.execute.restore();
    });

    it('retorna um objeto', async () => {
      const [response] = await vendasModel.addVenda(payloadVenda);

      expect(response).to.be.a('object');
    });

    it('o objeto possui a quantidade de linhas afetadas', async () => {
      const [response] = await vendasModel.addVenda(payloadVenda);

      expect(response).to.have.a.property('affectedRows');
    });
  });
});
