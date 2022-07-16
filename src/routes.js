const express = require('express');
const comprasController = require('./controllers/compras.controller');

const routes = express.Router();

routes.use('/investimentos/comprar', comprasController);

module.exports = routes;
