const connection = require('../db/investimentManager');

const getByCodAtivo = (codAtivo) => connection.execute(
  'SELECT * FROM InvestimentManager.ativos_disponiveis WHERE id = ?',
  [codAtivo],
);

const updateQtdeAtivo = (qtde, codAtivo) => connection.execute(
  'UPDATE InvestimentManager.ativos_disponiveis SET qtde = ? WHERE id = ?',
  [qtde, codAtivo],
);

module.exports = { getByCodAtivo, updateQtdeAtivo };
