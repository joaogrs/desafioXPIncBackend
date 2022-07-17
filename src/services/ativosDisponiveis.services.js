const ativosDisponiveisModel = require('../models/ativosDisponiveis.model');

const getByCodAtivo = async (codAtivo) => {
  const [[ativos]] = await ativosDisponiveisModel.getByCodAtivo(codAtivo);
  const { id, qtde, valor } = ativos;
  return { CodAtivo: id, QtdeAtivo: qtde, Valor: valor };
};

module.exports = { getByCodAtivo };
