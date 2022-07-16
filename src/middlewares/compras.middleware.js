const ativosDisponiveisModel = require('../models/ativosDisponiveis.model');

const validateAtivosDisponiveis = async (req, res, next) => {
  const { codAtivo, qtdeAtivo: qtdeCompra } = req.body;
  const [[ativo]] = await ativosDisponiveisModel.getByCodAtivo(codAtivo);
  const newQtde = ativo.qtde - qtdeCompra;

  if (newQtde < 0) {
    return res.status(422).json({ message: 'Quantidade de ações não disponível para compra' });
  }

  await ativosDisponiveisModel.updateQtdeAtivo(newQtde, codAtivo);
  return next();
};

module.exports = { validateAtivosDisponiveis };
