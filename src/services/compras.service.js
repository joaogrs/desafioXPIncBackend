const comprasModel = require('../models/compras.model');
const alteraInvestimento = require('../helpers/alteraInvestimento');

const addCompra = async ({ codCliente, codAtivo, qtdeAtivo }) => {
  await comprasModel.addCompra(codCliente, codAtivo, qtdeAtivo);
  const valor = await alteraInvestimento(codCliente, codAtivo, qtdeAtivo);
  return {
    codCliente, codAtivo, qtdeAtivo, valor,
  };
};

module.exports = { addCompra };
