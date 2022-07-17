const connection = require('../db/investimentManager');

const addSaque = (codCliente, valor) => connection.execute('INSERT INTO InvestimentManager.hist_saque (CodCliente, Valor) VALUES (?, ?)', [codCliente, valor]);

module.exports = { addSaque };
