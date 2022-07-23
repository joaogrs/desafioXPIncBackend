const clientesModel = require('../models/clientes.model');

const getClienteByCod = async (codAtivo) => {
  const [[cliente]] = await clientesModel.getClienteByCod(codAtivo);
  return cliente;
};

const addCliente = async ({ username, password }) => {
  if (!username || !password) return false;
  return clientesModel.addCliente(username, password);
};

module.exports = { getClienteByCod, addCliente };
