const investimentosModel = require('../models/investimentos.model');

const getByCodCliente = async (codCliente) => {
  const [ativos] = await investimentosModel.getByCodCliente(codCliente);
  return ativos;
};

module.exports = { getByCodCliente };
