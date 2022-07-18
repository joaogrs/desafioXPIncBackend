const historicoDepositoModel = require('../models/historicoDeposito.model');
const { alteraSaldo } = require('../helpers/alteraSaldo');

const addDeposito = async ({ CodCliente, Valor }) => {
  await historicoDepositoModel.addDeposito(CodCliente, Valor);
  return alteraSaldo(CodCliente, Valor, 'deposito');
};

module.exports = { addDeposito };
