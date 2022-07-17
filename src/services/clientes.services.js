const clientesModel = require('../models/clientes.model');

const getClienteByCod = async (codAtivo) => {
  const [[cliente]] = await clientesModel.getClienteByCod(codAtivo);
  return cliente;
};

module.exports = { getClienteByCod };
