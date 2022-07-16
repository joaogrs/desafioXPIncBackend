const connection = require('../db/investimentManager');

const addInvestimento = (codCliente, codAtivo, qtdeAtivo, valor) => connection.execute(
  'INSERT INTO InvestimentManager.investimento (CodCliente, CodAtivo, QtdeAtivo, Valor) VALUES(?, ?, ?, ?)',
  [codCliente, codAtivo, qtdeAtivo, valor],
);

module.exports = { addInvestimento };
