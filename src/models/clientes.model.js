const connection = require('../db/investimentManager');

const updateSaldoModel = (codCliente, valor) => connection.execute('UPDATE InvestimentManager.clientes SET saldo = ? WHERE codCliente = ?', [valor, codCliente]);

const getClienteByCod = (codCliente) => connection.execute('SELECT codCliente, saldo FROM InvestimentManager.clientes WHERE codCliente = ?', [codCliente]);

const getClienteByUserAndPassword = (username, password) => connection.execute('SELECT * FROM InvestimentManager.clientes WHERE username = ? AND password = ?', [username, password]);

const addCliente = (username, password) => connection.execute('INSERT INTO InvestimentManager.clientes (saldo, username, password) VALUES (0, ?, ?)', [username, password]);

module.exports = {
  updateSaldoModel, getClienteByCod, getClienteByUserAndPassword, addCliente,
};
