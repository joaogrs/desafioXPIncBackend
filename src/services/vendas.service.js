const vendasModel = require('../models/vendas.model');
const { alteraInvestimentosVenda } = require('../helpers/alteraInvestimento');

const addVenda = async ({ codCliente, codAtivo, qtdeAtivo }) => {
  await vendasModel.addVenda(codCliente, codAtivo, qtdeAtivo);
  const response = await alteraInvestimentosVenda(codCliente, codAtivo, qtdeAtivo);
  return {
    codCliente, codAtivo, qtdeAtivo: response.qtdeAtivo, valor: response.valor,
  };
};

module.exports = { addVenda };
