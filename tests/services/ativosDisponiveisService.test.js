/* eslint-disable no-unused-expressions */
const sinon = require('sinon');
const { expect } = require('chai');
const ativosDisponiveisModel = require('../../src/models/ativosDisponiveis.model');
const ativosDisponiveisService = require('../../src/services/ativosDisponiveis.services');

describe('Busca todos os ativos no DB', () => {
  describe('quando não existe nenhum ativo criado', async () => {
    before(() => {
      sinon.stub(ativosDisponiveisModel, 'getAllAtivos')
        .resolves([[]]);
    });

    after(() => {
      ativosDisponiveisModel.getAllAtivos.restore();
    });

    it('retorna um array', async () => {
      const response = await ativosDisponiveisService.getAllAtivos();

      expect(response).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const response = await ativosDisponiveisService.getAllAtivos();

      expect(response).to.be.empty;
    });
  });

  describe('quando existem ativos criados', () => {
    before(() => {
      sinon.stub(ativosDisponiveisModel, 'getAllAtivos')
        .resolves([[
          {
            nome: 'XPIN',
            qtdeAtivo: 0,
            valor: 16.94,
          },
        ]]);
    });

    after(() => {
      ativosDisponiveisModel.getAllAtivos.restore();
    });

    it('retorna um array', async () => {
      const response = await ativosDisponiveisService.getAllAtivos();

      expect(response).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const response = await ativosDisponiveisService.getAllAtivos();

      expect(response).to.be.not.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [item] = await ativosDisponiveisService.getAllAtivos();

      expect(item).to.be.an('object');
    });

    it('tais itens possui as propriedades: "nome", "qtdeAtivo" e "valor"', async () => {
      const item = await ativosDisponiveisService.getAllAtivos();

      expect(item[0]).to.include.all.keys('nome', 'qtdeAtivo', 'valor');
    });
  });
});
