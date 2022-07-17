const connection = require('../db/investimentManager');

const updateSaldoModel = (codCliente, valor) => connection.execute('UPDATE InvestimentManager.clientes SET saldo = ? WHERE codCliente = ?', [valor, codCliente]);

const getClienteByCod = (codCliente) => connection.execute('SELECT codCliente, saldo FROM InvestimentManager.clientes WHERE codCliente = ?', [codCliente]);

module.exports = { updateSaldoModel, getClienteByCod };
