const investimentosModel = require('../models/investimentos.model');
const ativosModel = require('../models/ativosDisponiveis.model');

const alteraInvestimentos = async (codCliente, codAtivo, qtdeAtivo) => {
  const [ativo] = await ativosModel.getByCodAtivo(codAtivo);
  const { valor } = ativo;
  const newValor = valor * qtdeAtivo;
  const [investimento] = await investimentosModel.getByCodClienteAndCodAtivo(codCliente, codAtivo);
  if (!investimento) {
    await investimentosModel.addInvestimento(codCliente, codAtivo, qtdeAtivo, newValor);
    return newValor;
  } await investimentosModel.update(codCliente, codAtivo, qtdeAtivo, newValor);
  return newValor;
};

module.exports = alteraInvestimentos;
