const clienteModel = require('../models/clientes.model');
const { generateToken } = require('../helpers/jwt');

const authenticate = async ({ username, password }) => {
  if (!username || !password) {
    return { status: 401, message: { message: 'Campos username e password obrigatórios' } };
  }

  const [clienteLogin] = await clienteModel.getClienteByUserAndPassword(username, password);
  console.log(clienteLogin);

  if (clienteLogin.length === 0) {
    return { status: 400, message: { message: 'Usuário ou senha inválido' } };
  }

  const token = generateToken(clienteLogin[0].username);

  return { status: 200, message: { token } };
};

module.exports = { authenticate };
