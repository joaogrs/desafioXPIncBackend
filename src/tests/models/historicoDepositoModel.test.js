const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../db/investimentManager');
const historicoDepositoModel = require('../../models/historicoDeposito.model');

describe('Insere os dados de um novo depósito no histórico', () => {
  describe('quando é inserido com sucesso', async () => {
    const payloadDeposito = {
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
      const [response] = await historicoDepositoModel.addDeposito(payloadDeposito);

      expect(response).to.be.a('object');
    });

    it('o objeto possui a quantidade de linhas afetadas', async () => {
      const [response] = await historicoDepositoModel.addDeposito(payloadDeposito);

      expect(response).to.have.a.property('affectedRows');
    });
  });
});
