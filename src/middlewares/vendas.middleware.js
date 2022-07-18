const investimentosModel = require('../models/investimentos.model');
const ativosDisponiveisModel = require('../models/ativosDisponiveis.model');
const clientesModel = require('../models/clientes.model');

const validateCamposVenda = async (req, res, next) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;

  if (!codCliente || !codAtivo || !qtdeAtivo) return res.status(422).json({ message: 'Os campos codCliente, codAtivo, qtdeAtivo são obrigatórios' });
  if ((qtdeAtivo < 0) || (qtdeAtivo === 0)) return res.status(400).json({ message: 'Quantidade inválida' });
  if ((typeof codCliente !== 'number') || typeof codAtivo !== 'number' || typeof qtdeAtivo !== 'number') return res.status(400).json({ message: 'Os campos devem ser do tipo number' });

  const [[cliente]] = await clientesModel.getClienteByCod(codCliente);
  if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });

  return next();
};

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

module.exports = { validateAtivosCarteira, validateCamposVenda };
