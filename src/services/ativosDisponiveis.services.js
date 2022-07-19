const ativosDisponiveisModel = require('../models/ativosDisponiveis.model');

const getByCodAtivo = async (codAtivo) => {
  const [[ativos]] = await ativosDisponiveisModel.getByCodAtivo(codAtivo);
  const { id, qtde, valor } = ativos;
  return { CodAtivo: id, QtdeAtivo: qtde, Valor: valor };
};

const getAllAtivos = async () => {
  const [ativos] = await ativosDisponiveisModel.getAllAtivos();
  return ativos;
};

module.exports = { getByCodAtivo, getAllAtivos };
