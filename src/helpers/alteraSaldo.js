const clientesModel = require('../models/clientes.model');

const alteraSaldo = async (codCliente, Valor, Tipo) => {
  const [[cliente]] = await clientesModel.getClienteByCod(codCliente);
  const newValor = Tipo === 'deposito' ? cliente.saldo + Valor : cliente.saldo - Valor;
  await clientesModel.updateSaldoModel(codCliente, newValor);
  return { codCliente, nome: cliente.nome, valor: newValor };
};

module.exports = alteraSaldo;
