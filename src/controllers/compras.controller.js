const express = require('express');
const comprasService = require('../services/compras.service');
const { validateAtivosDisponiveis, validateSaldoConta, validateCamposCompra } = require('../middlewares/compras.middleware');

const comprasController = express.Router();

comprasController.post('/', validateCamposCompra, validateAtivosDisponiveis, validateSaldoConta, async (req, res) => {
  const response = await comprasService.addCompra(req.body);
  res.status(201).json(response);
});

module.exports = comprasController;
