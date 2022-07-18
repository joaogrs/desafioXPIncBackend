const validateDeposito = async (req, res, next) => {
  const { CodCliente, Valor } = req.body;
  if (!CodCliente) return res.status(422).json({ message: 'Campo CodCliente obrigatório' });
  if (!Valor) return res.status(422).json({ message: 'Campo Valor obrigatório' });
  if ((typeof CodCliente !== 'number') || typeof Valor !== 'number') return res.status(400).json({ message: 'Os campos devem ser do tipo number' });
  if (Valor < 0 || Valor === 0) return res.status(400).json({ message: 'Valor de depósito inválido' });
  return next();
};

module.exports = validateDeposito;
