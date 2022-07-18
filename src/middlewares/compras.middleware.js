const ativosDisponiveisModel = require('../models/ativosDisponiveis.model');
const ativosModel = require('../models/ativosDisponiveis.model');
const clientesModel = require('../models/clientes.model');

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

const validateSaldoConta = async (req, res, next) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;
  const [[cliente]] = await clientesModel.getClienteByCod(codCliente);
  const [[ativo]] = await ativosModel.getByCodAtivo(codAtivo);
  const valor = ativo.valor * qtdeAtivo;
  const newValorCarteira = cliente.saldo - valor;

  if (newValorCarteira < 0) {
    return res.status(422).json({ message: 'Valor não disponível na conta' });
  }

  await clientesModel.updateSaldoModel(codCliente, newValorCarteira);
  return next();
};

module.exports = { validateAtivosDisponiveis, validateSaldoConta };
