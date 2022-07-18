const clienteModel = require('../models/clientes.model');

const validateSaque = async (req, res, next) => {
  const { CodCliente, Valor } = req.body;
  if (!CodCliente) return res.status(422).json({ message: 'Campo CodCliente obrigatório' });
  if (!Valor) return res.status(422).json({ message: 'Campo Valor obrigatório' });
  if (Valor < 0 || Valor === 0) return res.status(400).json({ message: 'Valor de saque inválido' });

  const [[cliente]] = await clienteModel.getClienteByCod(CodCliente);
  if (cliente.saldo < Valor) return res.status(400).json({ message: 'Valor do saque não disponível na conta' });

  return next();
};

module.exports = validateSaque;
