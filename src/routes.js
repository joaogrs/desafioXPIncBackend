const express = require('express');
const comprasController = require('./controllers/compras.controller');
const vendasController = require('./controllers/vendas.controller');

const routes = express.Router();

routes.use('/investimentos/comprar', comprasController);
routes.use('/investimentos/vender', vendasController);

module.exports = routes;
