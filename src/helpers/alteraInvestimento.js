const investimentosModel = require('../models/investimentos.model');
const ativosModel = require('../models/ativosDisponiveis.model');

const alteraInvestimentosCompra = async (codCliente, codAtivo, qtdeAtivo) => {
  const [[ativo]] = await ativosModel.getByCodAtivo(codAtivo);
  const valor = ativo.valor * qtdeAtivo;
  const [investimento] = await investimentosModel.getByCodClienteAndCodAtivo(codCliente, codAtivo);
  if (investimento.length === 0) {
    await investimentosModel.addInvestimento(codCliente, codAtivo, qtdeAtivo, valor);
    return { valor, qtdeAtivo };
  }
  const newValor = investimento[0].Valor + valor;
  const newQtde = investimento[0].QtdeAtivo + qtdeAtivo;
  await investimentosModel.update(codCliente, codAtivo, newQtde, newValor);
  return { valor: newValor, qtdeAtivo: newQtde };
};

const alteraInvestimentosVenda = async (codCliente, codAtivo, qtdeAtivo) => {
  const [[ativo]] = await ativosModel.getByCodAtivo(codAtivo);
  const valor = ativo.valor * qtdeAtivo;
  const [investimento] = await investimentosModel.getByCodClienteAndCodAtivo(codCliente, codAtivo);
  const newValor = investimento[0].Valor - valor;
  const newQtde = investimento[0].QtdeAtivo - qtdeAtivo;
  await investimentosModel.update(codCliente, codAtivo, newQtde, newValor);
  return { valor: newValor, qtdeAtivo: newQtde };
};

module.exports = { alteraInvestimentosCompra, alteraInvestimentosVenda };
