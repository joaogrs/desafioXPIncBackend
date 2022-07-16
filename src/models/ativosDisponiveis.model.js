const connection = require('../db/investimentManager');

const getByCodAtivo = (codAtivo) => connection.execute(
  'SELECT * FROM InvestimentManager.ativos_disponiveis WHERE id = ?',
  [codAtivo],
);

module.exports = { getByCodAtivo };
