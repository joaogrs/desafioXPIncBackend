const { hash } = require('bcrypt');
const clientesModel = require('../models/clientes.model');

const getClienteByCod = async (codAtivo) => {
  const [[cliente]] = await clientesModel.getClienteByCod(codAtivo);
  return cliente;
};

const addCliente = async ({ username, password }) => {
  if (!username || !password) return false;
  const passwordHash = await hash(password, 8);
  return clientesModel.addCliente(username, passwordHash);
};

module.exports = { getClienteByCod, addCliente };
