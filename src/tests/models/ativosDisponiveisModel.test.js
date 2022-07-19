/* eslint-disable no-unused-expressions */
const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../db/investimentManager');
const ativosDisponiveisModel = require('../../models/ativosDisponiveis.model');

describe('Busca um ativo pelo código', () => {
  const codAtivo = 1;
  describe('Quando não existe o ativo com o codigo inserido', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([[]]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Retorna um array', async () => {
      const [resultado] = await ativosDisponiveisModel.getByCodAtivo(codAtivo);
      expect(resultado).to.be.an('array');
    });

    it('O array está vazio', async () => {
      const [resultado] = await ativosDisponiveisModel.getByCodAtivo(codAtivo);
      expect(resultado).to.be.empty;
    });
  });

  describe('Quando a busca é realizada com sucesso', async () => {
    const ativo = {
      CodAtivo: 1,
      Valor: 16.94,
    };

    before(() => {
      sinon.stub(connection, 'execute').resolves([[ativo]]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna um array', async () => {
      const [resultado] = await ativosDisponiveisModel.getByCodAtivo(codAtivo);
      expect(resultado).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const [resultado] = await ativosDisponiveisModel.getByCodAtivo(codAtivo);
      expect(resultado).to.not.be.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [resultado] = await ativosDisponiveisModel.getByCodAtivo(codAtivo);
      expect(resultado[0]).to.be.an('object');
    });

    it('tais itens possui as propriedades:"CodAtivo" e "Valor"', async () => {
      const [resultado] = await ativosDisponiveisModel.getByCodAtivo(codAtivo);
      expect(resultado[0]).to.include.all.keys('CodAtivo', 'Valor');
    });
  });
});

describe('Busca todos os ativos disponíveis', () => {
  const codAtivo = 1;

  describe('Quando a busca é realizada com sucesso', async () => {
    const ativo = [{
      nome: 'XPIN',
      qtdeAtivo: 0,
      valor: 16.94,
    }, {
      nome: 'XPED',
      qtdeAtivo: 50430,
      valor: 5.75,
    },
    ];

    before(() => {
      sinon.stub(connection, 'execute').resolves([ativo]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna um array', async () => {
      const [resultado] = await ativosDisponiveisModel.getByCodAtivo(codAtivo);
      expect(resultado).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const [resultado] = await ativosDisponiveisModel.getByCodAtivo(codAtivo);
      expect(resultado).to.not.be.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [resultado] = await ativosDisponiveisModel.getByCodAtivo(codAtivo);
      expect(resultado[0]).to.be.an('object');
    });

    it('tais itens possui as propriedades:"nome" e "qtdeAtivo" e "valor"', async () => {
      const [resultado] = await ativosDisponiveisModel.getByCodAtivo(codAtivo);
      expect(resultado[0]).to.include.all.keys('nome', 'qtdeAtivo', 'valor');
    });
  });
});

describe('Atualiza a quantidade de ativos', () => {
  describe('Quando não existe o ativo', () => {
    let executeSpy;

    beforeEach(() => {
      executeSpy = sinon.stub(connection, 'execute').resolves([[{ affectedRows: 0 }]]);
    });

    afterEach(() => {
      connection.execute.restore();
    });

    it('retornar `affectedRows` igual a 0', async () => {
      const [resultado] = await ativosDisponiveisModel.updateQtdeAtivo(1, 1);
      expect(resultado).to.be.an('array');
      expect(resultado).to.not.be.empty;
      expect(resultado[0]).to.be.an('object');
      expect(resultado[0]).to.has.key('affectedRows');
      expect(resultado[0].affectedRows).to.be.equal(0);
    });

    it('verifica se está executando uma Query `UPDATE`', async () => {
      await ativosDisponiveisModel.updateQtdeAtivo(1, 1);
      expect(executeSpy.callCount).to.be.equal(1, 1);
      expect(executeSpy.getCalls()[0].firstArg).to.contain('UPDATE');
    });
  });

  describe('quando existe o ativo criado', () => {
    let executeSpy;

    beforeEach(() => {
      executeSpy = sinon.stub(connection, 'execute').resolves([[{ affectedRows: 1 }]]);
    });

    afterEach(() => {
      connection.execute.restore();
    });

    it('retornar `affectedRows` igual a 1"', async () => {
      const [resultado] = await ativosDisponiveisModel.updateQtdeAtivo(1, 1);
      expect(resultado).to.be.an('array');
      expect(resultado).to.not.be.empty;
      expect(resultado[0]).to.be.an('object');
      expect(resultado[0]).to.has.key('affectedRows');
      expect(resultado[0].affectedRows).to.be.equal(1);
      expect(executeSpy.callCount).to.be.equal(1);
    });

    it('verifica se está executando uma Query `UPDATE`', async () => {
      await ativosDisponiveisModel.updateQtdeAtivo(1, 1);
      expect(executeSpy.callCount).to.be.equal(1);
      expect(executeSpy.getCalls()[0].firstArg).to.contain('UPDATE');
    });
  });
});
