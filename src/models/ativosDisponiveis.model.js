const connection = require('../db/investimentManager');

const getByCodAtivo = (codAtivo) => connection.execute(
  'SELECT id, qtdeAtivo, valor FROM InvestimentManager.ativos_disponiveis WHERE id = ?',
  [codAtivo],
);

const getAllAtivos = () => connection.execute(
  'SELECT nome, qtdeAtivo, valor FROM InvestimentManager.ativos_disponiveis',
);

const updateQtdeAtivo = (qtde, codAtivo) => connection.execute(
  'UPDATE InvestimentManager.ativos_disponiveis SET qtdeAtivo = ? WHERE id = ?',
  [qtde, codAtivo],
);

module.exports = { getByCodAtivo, updateQtdeAtivo, getAllAtivos };
