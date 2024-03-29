const vendasModel = require('../models/vendas.model');
const { alteraInvestimentosVenda } = require('../helpers/alteraInvestimento');
const { alteraSaldoVenda } = require('../helpers/alteraSaldo');

const addVenda = async ({ codCliente, codAtivo, qtdeAtivo }) => {
  await vendasModel.addVenda(codCliente, codAtivo, qtdeAtivo);
  await alteraSaldoVenda(codCliente, codAtivo, qtdeAtivo);
  const response = await alteraInvestimentosVenda(codCliente, codAtivo, qtdeAtivo);
  return {
    codCliente, codAtivo, qtdeAtivo: response.qtdeAtivo, valor: response.valor,
  };
};

module.exports = { addVenda };
