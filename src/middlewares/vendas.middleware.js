const investimentosModel = require('../models/investimentos.model');
const ativosDisponiveisModel = require('../models/ativosDisponiveis.model');

const validateAtivosCarteira = async (req, res, next) => {
  const { codCliente, codAtivo, qtdeAtivo: qtdeVenda } = req.body;
  const [[carteira]] = await investimentosModel.getByCodClienteAndCodAtivo(codCliente, codAtivo);
  if (!carteira) return res.status(404).json({ message: 'Ativo não disponível na carteira' });

  const newQtdeCarteira = carteira.QtdeAtivo - qtdeVenda;
  if (newQtdeCarteira < 0) return res.status(422).json({ message: 'Quantidade de ações não disponível na carteira' });

  const [[ativo]] = await ativosDisponiveisModel.getByCodAtivo(codAtivo);
  const newQtdeAtivo = ativo.qtde + qtdeVenda;
  await ativosDisponiveisModel.updateQtdeAtivo(newQtdeAtivo, codAtivo);
  return next();
};

module.exports = { validateAtivosCarteira };
