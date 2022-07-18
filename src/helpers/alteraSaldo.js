const clientesModel = require('../models/clientes.model');
const ativosModel = require('../models/ativosDisponiveis.model');

const alteraSaldo = async (codCliente, Valor, Tipo) => {
  const [[cliente]] = await clientesModel.getClienteByCod(codCliente);
  const newValor = Tipo === 'deposito' ? cliente.saldo + Valor : cliente.saldo - Valor;
  await clientesModel.updateSaldoModel(codCliente, newValor);
  return { codCliente, nome: cliente.nome, valor: newValor };
};

const alteraSaldoVenda = async (codCliente, codAtivo, qtdeAtivo) => {
  const [[cliente]] = await clientesModel.getClienteByCod(codCliente);
  const [[ativo]] = await ativosModel.getByCodAtivo(codAtivo);
  const valor = ativo.valor * qtdeAtivo;
  const newValorCarteira = cliente.saldo + valor;

  return clientesModel.updateSaldoModel(codCliente, newValorCarteira);
};

module.exports = { alteraSaldo, alteraSaldoVenda };
