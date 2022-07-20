const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../src/db/investimentManager');
const historicoSaqueModel = require('../../src/models/historicoSaque.model');

describe('Insere os dados de um novo saque no histórico', () => {
  describe('quando é inserido com sucesso', async () => {
    const payloadSaque = {
      codCliente: 1,
      Valor: 10.50,
    };

    before(async () => {
      const execute = [{ affectedRows: 1 }];

      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(async () => {
      connection.execute.restore();
    });

    it('retorna um objeto', async () => {
      const [response] = await historicoSaqueModel.addSaque(payloadSaque);

      expect(response).to.be.a('object');
    });

    it('o objeto possui a quantidade de linhas afetadas', async () => {
      const [response] = await historicoSaqueModel.addSaque(payloadSaque);

      expect(response).to.have.a.property('affectedRows');
    });
  });
});
