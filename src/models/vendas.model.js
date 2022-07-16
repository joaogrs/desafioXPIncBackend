const connection = require('../db/investimentManager');

const addVenda = (codCliente, codAtivo, qtdeAtivo) => connection.execute(
  'INSERT INTO InvestimentManager.vendas (codCliente, codAtivo, qtdeAtivo) VALUES(?, ?, ?)',
  [codCliente, codAtivo, qtdeAtivo],
);

module.exports = { addVenda };
