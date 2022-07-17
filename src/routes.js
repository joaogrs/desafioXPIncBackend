const express = require('express');
const comprasController = require('./controllers/compras.controller');
const vendasController = require('./controllers/vendas.controller');
const investimentosController = require('./controllers/investimentos.controller');
const ativosDisponiveisController = require('./controllers/ativosDisponiveis.controller');
const depositoController = require('./controllers/deposito.controller');

const routes = express.Router();

routes.use('/investimentos/comprar', comprasController);
routes.use('/investimentos/vender', vendasController);
routes.use('/ativos/clientes', investimentosController);
routes.use('/ativos', ativosDisponiveisController);
routes.use('/conta/deposito', depositoController);

module.exports = routes;
