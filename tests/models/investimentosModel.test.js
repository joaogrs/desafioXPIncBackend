/* eslint-disable no-unused-expressions */
const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../src/db/investimentManager');
const investimentosModel = require('../../src/models/investimentos.model');

describe('Busca todos os investimentos de determinado cliente', () => {
  describe('Quando não existe o investimento ', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([[]]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Retorna um array', async () => {
      const [resultado] = await investimentosModel.getByCodCliente(5);
      expect(resultado).to.be.an('array');
    });

    it('O array está vazio', async () => {
      const [resultado] = await investimentosModel.getByCodCliente(5);
      expect(resultado).to.be.empty;
    });
  });

  describe('Quando a busca é realizada com sucesso', async () => {
    const codCliente = 1;
    const investimentos = [
      {
        CodCliente: 1,
        CodAtivo: 1,
        QtdeAtivo: 1,
        Valor: 16.94,
      },
      {
        CodCliente: 1,
        CodAtivo: 2,
        QtdeAtivo: 3,
        Valor: 30.50,
      },
    ];

    before(() => {
      sinon.stub(connection, 'execute').resolves([investimentos]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna um array', async () => {
      const [resultado] = await investimentosModel.getByCodCliente(codCliente);
      expect(resultado).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const [resultado] = await investimentosModel.getByCodCliente(codCliente);
      expect(resultado).to.not.be.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [resultado] = await investimentosModel.getByCodCliente(codCliente);
      expect(resultado[0]).to.be.an('object');
    });

    it('tais itens possui as propriedades:"CodCliente", "CodAtivo", "QtdeAtivo" e "Valor"', async () => {
      const [resultado] = await investimentosModel.getByCodCliente(codCliente);
      expect(resultado[0]).to.include.all.keys('CodCliente', 'CodAtivo', 'QtdeAtivo', 'Valor');
    });
  });
});

describe('Busca um investimento pelo código do cliente e pelo código do ativo', () => {
  describe('Quando não existe o ativo com os códigos inseridos', () => {
    const codAtivo = 4;
    const codCliente = 4;
    before(() => {
      sinon.stub(connection, 'execute').resolves([[]]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Retorna um array', async () => {
      const [resultado] = await investimentosModel.getByCodClienteAndCodAtivo(codCliente, codAtivo);
      expect(resultado).to.be.an('array');
    });

    it('O array está vazio', async () => {
      const [resultado] = await investimentosModel.getByCodClienteAndCodAtivo(codCliente, codAtivo);
      expect(resultado).to.be.empty;
    });
  });

  describe('Quando a busca é realizada com sucesso', async () => {
    const codCliente = 1;
    const codAtivo = 1;
    const investimento = {
      CodCliente: 1,
      CodAtivo: 1,
      QtdeAtivo: 5,
      Valor: 16.94,
    };

    before(() => {
      sinon.stub(connection, 'execute').resolves([[investimento]]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna um array', async () => {
      const [resultado] = await investimentosModel.getByCodClienteAndCodAtivo(codCliente, codAtivo);
      expect(resultado).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const [resultado] = await investimentosModel.getByCodClienteAndCodAtivo(codCliente, codAtivo);
      expect(resultado).to.not.be.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [resultado] = await investimentosModel.getByCodClienteAndCodAtivo(codCliente, codAtivo);
      expect(resultado[0]).to.be.an('object');
    });

    it('tais itens possui as propriedades:"CodCliente", "CodAtivo", "QtdeAtivo" e "Valor"', async () => {
      const [resultado] = await investimentosModel.getByCodClienteAndCodAtivo(codCliente, codAtivo);
      expect(resultado[0]).to.include.all.keys('CodCliente', 'CodAtivo', 'QtdeAtivo', 'Valor');
    });
  });
});

describe('Atualiza a quantidade na carteira de investimentos', () => {
  const codCliente = 1;
  const codAtivo = 1;
  const qtdeAtivo = 3;
  const valor = 16.94;

  describe('Quando não existe o investimento', () => {
    let executeSpy;

    beforeEach(() => {
      executeSpy = sinon.stub(connection, 'execute').resolves([[{ affectedRows: 0 }]]);
    });

    afterEach(() => {
      connection.execute.restore();
    });

    it('retornar `affectedRows` igual a 0', async () => {
      const [resultado] = await investimentosModel.update(codCliente, codAtivo, qtdeAtivo, valor);
      expect(resultado).to.be.an('array');
      expect(resultado).to.not.be.empty;
      expect(resultado[0]).to.be.an('object');
      expect(resultado[0]).to.has.key('affectedRows');
      expect(resultado[0].affectedRows).to.be.equal(0);
    });

    it('verifica se está executando uma Query `UPDATE`', async () => {
      await investimentosModel.update(codCliente, codAtivo, qtdeAtivo, valor);
      expect(executeSpy.callCount).to.be.equal(1, 1);
      expect(executeSpy.getCalls()[0].firstArg).to.contain('UPDATE');
    });
  });

  describe('quando existe o investimentos na carteira', () => {
    let executeSpy;

    beforeEach(() => {
      executeSpy = sinon.stub(connection, 'execute').resolves([[{ affectedRows: 1 }]]);
    });

    afterEach(() => {
      connection.execute.restore();
    });

    it('retornar `affectedRows` igual a 1"', async () => {
      const [resultado] = await investimentosModel.update(codCliente, codAtivo, qtdeAtivo, valor);
      expect(resultado).to.be.an('array');
      expect(resultado).to.not.be.empty;
      expect(resultado[0]).to.be.an('object');
      expect(resultado[0]).to.has.key('affectedRows');
      expect(resultado[0].affectedRows).to.be.equal(1);
      expect(executeSpy.callCount).to.be.equal(1);
    });

    it('verifica se está executando uma Query `UPDATE`', async () => {
      await investimentosModel.update(codCliente, codAtivo, qtdeAtivo, valor);
      expect(executeSpy.callCount).to.be.equal(1);
      expect(executeSpy.getCalls()[0].firstArg).to.contain('UPDATE');
    });
  });
});

describe('Insere um novo investimento na carteira', () => {
  describe('quando é inserido com sucesso', async () => {
    const payloadInvestimento = {
      CodCliente: 1,
      codAtivo: 1,
      qtdeAtivo: 2,
      Valor: 16.94,
    };

    before(async () => {
      const execute = [{ affectedRows: 1 }];

      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(async () => {
      connection.execute.restore();
    });

    it('retorna um objeto', async () => {
      const [response] = await investimentosModel.addInvestimento(payloadInvestimento);

      expect(response).to.be.a('object');
    });

    it('o objeto possui a quantidade de linhas afetadas', async () => {
      const [response] = await investimentosModel.addInvestimento(payloadInvestimento);

      expect(response).to.have.a.property('affectedRows');
    });
  });
});
