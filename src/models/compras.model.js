const connection = require('../db/investimentManager');

const addCompra = (codCliente, codAtivo, qtdeAtivo) => connection.execute(
  'INSERT INTO InvestimentManager.compras (codCliente, codAtivo, qtdeAtivo) VALUES(?, ?, ?)',
  [codCliente, codAtivo, qtdeAtivo],
);

module.exports = { addCompra };
