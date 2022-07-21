const ativosDisponiveisModel = require('../models/ativosDisponiveis.model');

const getByCodAtivo = async (codAtivo) => {
  const [[ativos]] = await ativosDisponiveisModel.getByCodAtivo(codAtivo);
  const { id, qtdeAtivo, valor } = ativos;
  return { CodAtivo: id, QtdeAtivo: qtdeAtivo, Valor: valor };
};

const getAllAtivos = async () => {
  const [ativos] = await ativosDisponiveisModel.getAllAtivos();
  return ativos;
};

module.exports = { getByCodAtivo, getAllAtivos };
