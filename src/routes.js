const { Router } = require('express');
const comprasController = require('./controllers/compras.controller');

const routes = Router();

routes.use('/investimentos/comprar', comprasController);

module.exports = routes;
