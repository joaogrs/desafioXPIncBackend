const comprasModel = require('../models/compras.model');
const alteraInvestimento = require('../helpers/alteraInvestimento');

const addCompra = async ({ codCliente, codAtivo, qtdeAtivo }) => {
  await comprasModel.addCompra(codCliente, codAtivo, qtdeAtivo);
  const response = await alteraInvestimento(codCliente, codAtivo, qtdeAtivo);
  return {
    codCliente, codAtivo, qtdeAtivo: response.qtdeAtivo, valor: response.valor,
  };
};

module.exports = { addCompra };
