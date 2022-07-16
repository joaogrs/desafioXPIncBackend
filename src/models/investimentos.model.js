const connection = require('../db/investimentManager');

const getByCodClienteAndCodAtivo = (codCliente, codAtivo) => connection.execute('SELECT * FROM InvestimentManager.investimentos WHERE CodCliente = ? AND CodAtivo = ?', [codCliente, codAtivo]);

const addInvestimento = (codCliente, codAtivo, qtdeAtivo, valor) => connection.execute(
  'INSERT INTO InvestimentManager.investimentos (CodCliente, CodAtivo, QtdeAtivo, Valor) VALUES(?, ?, ?, ?)',
  [codCliente, codAtivo, qtdeAtivo, valor],
);

const update = (codCliente, codAtivo, qtdeAtivo, valor) => connection.execute(`UPDATE InvestimentManager.investimentos SET 
QtdeAtivo = ?, Valor = ? WHERE CodCliente = ? AND CodAtivo = ?`, [qtdeAtivo, valor, codCliente, codAtivo]);

module.exports = { addInvestimento, update, getByCodClienteAndCodAtivo };
