const historicoSaqueModel = require('../models/historicoSaque.model');
const alteraSaldo = require('../helpers/alteraSaldo');

const addSaque = async ({ CodCliente, Valor }) => {
  await historicoSaqueModel.addSaque(CodCliente, Valor);
  return alteraSaldo(CodCliente, Valor, 'saque');
};

module.exports = { addSaque };
