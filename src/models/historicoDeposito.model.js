const connection = require('../db/investimentManager');

const addDeposito = (codCliente, valor) => connection.execute('INSERT INTO InvestimentManager.hist_deposito (CodCliente, Valor) VALUES (?, ?)', [codCliente, valor]);

module.exports = { addDeposito };
