const comprasModel = require('../models/compras.model');
const { alteraInvestimentosCompra } = require('../helpers/alteraInvestimento');

const addCompra = async ({ codCliente, codAtivo, qtdeAtivo }) => {
  await comprasModel.addCompra(codCliente, codAtivo, qtdeAtivo);
  const response = await alteraInvestimentosCompra(codCliente, codAtivo, qtdeAtivo);
  return {
    codCliente, codAtivo, qtdeAtivo: response.qtdeAtivo, valor: response.valor,
  };
};

module.exports = { addCompra };
